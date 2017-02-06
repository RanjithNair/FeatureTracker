export default {
  routesPermissions: {
    requireAuth: [
      '/admin'
    ],
    routesRequireAdmin: [
      '/admin'
    ]
  },
  routing: {},
  user: {
    isAdmin: undefined
  },
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
  newFeature: {
    featureTitle: null,
    sprintNum: "1",
    environments: [],
    isSaved: false
  },
  featureDashboard : {
    featureList: null,
  },
  ajaxCallsInProgress: 0
};
