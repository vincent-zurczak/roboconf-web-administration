(function() {
  'use strict';

  angular
  .module('roboconf.targets')
  .config(appConfig);

  appConfig.$inject = ['$routeProvider'];
  function appConfig($routeProvider) {
    $routeProvider

    .when('/targets', {
      templateUrl: 'templates/targets/html/_targets-list.html',
      controller: 'TargetsListingController'
    })

    .when('/targets/new', {
      templateUrl: 'templates/targets/html/_targets-new.html',
      controller: 'TargetsNewController'
    })

    .when('/target/:targetId', {
      templateUrl: 'templates/targets/html/_target-properties.html',
      controller: 'TargetEditingController'
    })

    .when('/target/:targetId/properties', {
      templateUrl: 'templates/targets/html/_target-properties.html',
      controller: 'TargetEditingController'
    })

    .when('/target/:targetId/usage', {
      templateUrl: 'templates/targets/html/_target-usage.html',
      controller: 'TargetSingleController'
    })

    .when('/target/:targetId/delete', {
      templateUrl: 'templates/targets/html/_target-delete.html',
      controller: 'TargetSingleController'
    });
  }
})();
