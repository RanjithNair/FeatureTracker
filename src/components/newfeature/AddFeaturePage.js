import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/featureActions';
import AddFeatureForm from './AddFeatureForm';
import FeatureDashboardPage from '../featureDashboard/FeatureDashboardPage';
import toastr from 'toastr';
import checkAuth from '../requireAuth';

export class AddFeaturePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false
    };
    this.createFeature = this.createFeature.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
  }

  updateUserState(event) {
    const field = event.target.name;
    // Based on the field, dipatch actions
    switch(field) {
      case 'feature-title':
        this.props.actions.changeFeatureText(event.target.value);
        break;
      case 'env-type':
        this.props.actions.changeEnvironment(event.target.value, event.target.checked);
        break;
      case 'sprint-num':
        this.props.actions.changeSprintNum(event.target.value);
        break;
      default:
        console.log('came null');
    }

  }

  createFeature(event) {
    event.preventDefault();
    event.currentTarget.form.reset();
    this.setState({saving: true});
    this.props.actions.createFeature(this.props.feature)
      .then((feature) => {
        toastr.success('Feature Created');
      })
      .catch(error => {
        toastr.error(error.message);
        this.setState({saving: false});
      });
  }

  render() {
    return (
      <div>
        <AddFeatureForm
          onSave={this.createFeature}
          saving={this.state.saving}
          feature={this.state.newFeature}
          onChange={this.updateUserState}
        />
        <FeatureDashboardPage />
      </div>
    );
  }
}

AddFeaturePage.propTypes = {
  actions: PropTypes.object.isRequired
};

AddFeaturePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {feature: state.newFeature};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default checkAuth(connect(mapStateToProps, mapDispatchToProps)(AddFeaturePage));
