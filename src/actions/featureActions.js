import firebaseApi from '../api/firebase';
import * as types from './actionTypes';
import {ajaxCallError, beginAjaxCall} from './ajaxStatusActions';


export function createFeature(feature) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return firebaseApi.databasePush('feature', feature).then(feature => {
      dispatch(featureCreatedSuccess());
      dispatch(getFeatures());
    }).catch(error => {
      dispatch(ajaxCallError(error));
      // @TODO better error handling
      throw (error);
    });
  };
}

export function setFeatureList(features) {
  return {
    type: types.RECIEVED_FEATURE_LIST,
    payload: features
  };
}

export function setReleaseList(releases) {
  return {
    type: types.RECIEVED_RELEASE_LIST,
    payload: releases
  };
}

export function getFeatures() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return firebaseApi.GetAllValues('feature').then(feature => {
      dispatch(featureCreatedSuccess());
      //dispatch another action to save the feature list to the state
      dispatch(setFeatureList(feature.val()));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      // @TODO better error handling
      throw (error);
    });
  };
}

export function getReleaseList() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return firebaseApi.GetAllValues('releases').then(releases => {
      dispatch(featureCreatedSuccess());
      //dispatch another action to save the feature list to the state
      dispatch(setReleaseList(releases.val()));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      // @TODO better error handling
      throw (error);
    });
  };
}

export function featureCreatedSuccess() {
  return {
    type: types.FEATURE_CREATED_SUCCESS
  };
}

export function changeFeatureText(text) {
  return {
    type: types.CHANGE_FEATURE_TEXT,
    payload: text
  };
}

export function changeEnvironment(envCode, checked) {
  return {
    type: types.CHANGE_ENVIRONMENTS,
    payload: {
      envCode,
      checked
    }
  };
}

export function changeSprintNum(sprintNum) {
  return {
    type: types.CHANGE_SPRINT_CYCLE,
    payload: sprintNum
  };
}

export function changeReleaseCycle(releaseTitle) {
  return {
    type: types.CHANGE_RELEASE_CYCLE,
    payload: releaseTitle
  };
}

export function updateFeature(id,attribute, value) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return firebaseApi.UpdateAttribute('feature', id, attribute, value).then(feature => {
      dispatch(featureCreatedSuccess());
      dispatch(getFeatures());
    }).catch(error => {
      dispatch(ajaxCallError(error));
      // @TODO better error handling
      throw (error);
    });
  };
}
