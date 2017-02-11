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
  }

  componentDidMount() {
    this.props.actions.getFeatures();
  }

  updateUserState(event) {
    // Get the value of the environments from featureList
    for(let item in this.props.features) {
      if(event.target.id === item) {
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
        this.props.actions.updateFeature(event.target.id,'environments',envValue);
        toastr.success('Feature Updated');
      }
    }
  }

  render() {
    return (
      <FeatureDashboardForm
        features={this.props.features}
        onChange={this.updateUserState}
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
