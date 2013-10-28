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
      .otherwise({
        redirectTo: '/'
      });
  });
