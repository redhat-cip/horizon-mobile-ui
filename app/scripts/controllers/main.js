/*global angular, $, console*/
'use strict';

angular.module('horizonMobileApp')
  .controller('InstancesCtrl', function ($scope) {
    //TODO http request to rest api
    $scope.instances = [
      {name: "instance1", power:"running"},
      {name: "instance2", power:"suspended"},
      {name: "instance3", power:"paused"},
      {name: "instance4", power:"running"},
      {name: "instance5", power:"running"}
    ]
  });
