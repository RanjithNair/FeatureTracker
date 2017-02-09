import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function featureDashboardReducer(state = initialState.featureDashboard, action) {
  switch (action.type) {
    case 'RECIEVED_FEATURE_LIST' :
      return Object.assign({}, state, {featureList: action.payload});
    case 'RECIEVED_RELEASE_LIST':
      return Object.assign({}, state, {releaseList: action.payload});
    default:
      return state;
  }
}
