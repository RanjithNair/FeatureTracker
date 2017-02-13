import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/featureActions';
import FeatureDashboardForm from './FeatureDashboardForm';
import toastr from 'toastr';

export class FeatureDashboardPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateUserState = this.updateUserState.bind(this);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.state = ({
      filteredItems: null
    });
  }

  componentDidMount() {
    this.props.actions.getFeatures();
  }

  onFilterTextChange(event) {
    const features = this.props.features;
    let filteredItems = {};
    for(let item in features) {
      if(features[item].featureTitle.toLowerCase().search(event.currentTarget.value.toLowerCase()) !== -1) {
        filteredItems[item] = features[item];
      }
    }
    this.setState({
      filteredItems
    });
  }

updateUserState(selectedItem, event) {
    if(event !== undefined) {
    // Get the value of the environments from featureList
      for(let item in this.props.features) {
        if(selectedItem === item) {
          let envValue
          if(this.props.features[item].environments == undefined) {
            envValue = [];
          } else {
            envValue = this.props.features[item].environments.slice(0);
          }
          if(event.target.checked) {
            if(envValue.indexOf(event.target.value) === -1){
              envValue.push(event.target.value);
            }
          }else{
            envValue.splice(envValue.indexOf(event.target.value),1);
          }
          this.props.actions.updateFeature(selectedItem,'environments',envValue);
          // this same change should be reflected in state variable also
          if(this.state.filteredItems !== null) {
            let storedStateVal = Object.assign({}, this.state.filteredItems);
            storedStateVal[selectedItem].environments = envValue;
            this.setState({
              filteredItems : storedStateVal
            });
          }
          toastr.success('Feature Updated');
        }
      }
    }
  }

  render() {
    return (
      <FeatureDashboardForm
        features={this.props.features}
        filteredFeatures={this.state.filteredItems}
        onChange={this.updateUserState}
        onFilterTextChange={this.onFilterTextChange}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    features: state.featureDashboard.featureList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureDashboardPage);
