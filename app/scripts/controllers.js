/*global angular, $, console*/
'use strict';

angular.module('horizonMobileApp')
  .controller('MenuCtrl', function ($scope, $rootScope) {
    $rootScope.header = "horizon";
  })
  .controller('InstancesCtrl', function ($scope, $rootScope) {
    //TODO http request to rest api
    $rootScope.header = "instances";

    $scope.instances = [
      {name: "instance1", power:"running"},
      {name: "instance2", power:"suspended"},
      {name: "instance3", power:"paused"},
      {name: "instance4", power:"running"},
      {name: "instance5", power:"running"}
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
  });
