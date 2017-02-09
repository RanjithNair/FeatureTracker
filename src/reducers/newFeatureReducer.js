import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function newFeatureReducer(state = initialState.newFeature, action) {
  switch (action.type) {
    case types.CHANGE_FEATURE_TEXT:
      return Object.assign({}, state, {featureTitle: action.payload});

    case types.CHANGE_SPRINT_CYCLE:
      return Object.assign({}, state, {sprintNum: action.payload});

    case types.CHANGE_ENVIRONMENTS:
      //get the existing array and based on checked/unchecked push/parserOptions
      let envValues = state.environments.slice(0);
      if(action.payload.checked) {
        // check whether that value is already there in the array
        if(envValues.indexOf(action.payload.envCode) !== -1) {
          return Object.assign({}, state);
        }
        envValues.push(action.payload.envCode);
        return Object.assign({}, state, {environments: envValues});
      }else {
        // remove that value from array
        envValues.splice(envValues.indexOf(action.payload.envCode),1);
        return Object.assign({}, state, {environments: envValues});
      }
    case types.FEATURE_CREATED_SUCCESS:
      return Object.assign({}, state, initialState.newFeature);
    case types.CHANGE_RELEASE_CYCLE:
      return Object.assign({}, state, {releaseTitle: action.payload});
    default:
      return state;
  }
}
