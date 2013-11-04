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
  })
  .controller('InstanceCtrl', function ($scope, $rootScope, $routeParams) {
    var id = $routeParams.id


    //TODO http request to rest api
    $scope.instance = {
      id: id,
      name: 'instance name',
      usages: [
        {
          name: 'Global Disk Usage',
          contents: [
            {
              entitled: 'Disk Read Bytes',
              value: '0',
              unit: 'B'
            },
            {
              entitled: 'Disk Read Requests',
              value: '0',
            },
            {
              entitled: 'Disk Write Bytes',
              value: '0',
              unit: 'B'
            },
            {
              entitled: 'Disk Write Requests',
              value: '0'
            }
          ]
        },
        {
          name: 'Global Network Traffic Usage',
          contents: [
            {
              entitled: 'Network Incoming Bytes',
              value: '0',
              unit: 'B'
            },
            {
              entitled: 'Network Incoming Packets',
              value: '0',
            },
            {
              entitled: 'Network Outgoing Bytes',
              value: '0',
              unit: 'B'
            },
            {
              entitled: 'Network Outgoing Packets',
              value: '0'
            }
          ]
        }
      ]
    }

    $rootScope.header = $scope.instance.name;
  });
