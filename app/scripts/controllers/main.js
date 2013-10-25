/*global angular, $*/
angular.module('horizonMobileApp')
  .controller('MainCtrl', function () {
    'use strict';

    $('.menu-elem').css({
      "height": function () {
        return $(this).width();
      }
    }).children('.glyphicon').css(
      "font-size",
      function () {
        return $(this).parent().width() / 2;
      }
    );
  });
