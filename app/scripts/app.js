'use strict';

angular.module('horizonMobileApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/instances',{
        templateUrl: 'views/instances.html',
        controller: 'InstancesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
