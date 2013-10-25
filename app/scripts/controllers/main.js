/*global angular, $, console*/
'use strict';

angular.module('horizonMobileApp')
  .controller('MainCtrl', function () {


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
  })
  .controller('InstancesCtrl', function () {
    console.log('instances');
  });
