/*global angular, $, console*/
'use strict';

angular.module('horizonMobileApp')
  .directive('header', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/header.html'
    };
  });