'use strict';

angular.module('horizonMobileApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .when('/instances',{
        templateUrl: 'views/instances.html',
        controller: 'InstancesCtrl'
      })
      .when('/instance/:id', {
        templateUrl: 'views/instance.html',
        controller: 'InstanceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
