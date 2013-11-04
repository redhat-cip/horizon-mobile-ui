/*global angular, $, console*/
'use strict';

angular.module('horizonMobileApp')
  .controller('MenuCtrl', function ($scope, $rootScope) {
    $rootScope.header = "horizon";
  })
  .controller('InstancesCtrl', function ($scope, $rootScope) {

    $rootScope.header = "instances";

    //TODO http request to rest api
    $scope.instances = [
      {id: 1, name: "instance1", power:"running"},
      {id: 2, name: "instance2", power:"suspended"},
      {id: 3, name: "instance3", power:"paused"},
      {id: 4, name: "instance4", power:"running"},
      {id: 5, name: "instance5", power:"running"}
    ];

    $scope.glyphicon = function (state) {
      switch (state) {
      case "running":
        return "glyphicon-play";
      case "suspended":
        return "glyphicon-pause";
      case "paused":
        return "glyphicon-stop";
      }
    }
  })
  .controller('InstanceCtrl', function ($scope, $rootScope, $routeParams) {
    //TODO http request to rest api
    $rootScope.header = "instance";



    console.log($routeParams.id);
  });
