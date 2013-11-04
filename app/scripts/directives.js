/*global angular, $, window*/
'use strict';

angular.module('horizonMobileApp')
  .directive('header', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/header.html',
      controller: function ($scope, $rootScope) {
        $scope.header = $rootScope.header;
      }
    };
  })
  .directive('dropdown', function () {
    return {
      link: function (scope, element) {
        var menu;
        menu = element.children('ul');
        element.click(function(){
          if (menu.is(':visible')) {
            menu.slideUp();
          } else {
            menu.slideDown();
          }
        });
      }
    };
  })
  .directive('adaptWidth', function () {
    return {
      link: function (scope, element) {
        var adapt = function () {
          element.css("height", element.width());
          element.children(".glyphicon").css("font-size", element.width() * 0.5);
        };
        adapt();

        $(window).on("orientationchange", adapt);
      }
    };
  })
  .directive('adaptCoor', function () {
    return {
      link: function (scope, element) {
        var coor;
        coor = element.offset();
        coor.top = coor.top + element.siblings().height();
        element.offset(coor);
      }
    };
  })
  .filter('glyphicon', function() {
    return function(input) {
      switch (input) {
      case "running":
        return "glyphicon-play";
      case "suspended":
        return "glyphicon-pause";
      case "paused":
        return "glyphicon-stop";
      }
    }
  });
