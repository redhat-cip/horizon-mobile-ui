/*global angular, $, console*/
'use strict';

angular.module('horizonMobileApp')
  .directive('header', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/header.html'
    };
  })
  .directive('adaptWidth', function () {
    return {
      link: function (scope, element, attrs) {
        element.css("height",element.width());
        element.children(".glyphicon").css("font-size", element.width() * 0.5);
      }
    };
  });
