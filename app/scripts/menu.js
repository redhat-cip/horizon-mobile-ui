/*global $*/
$(function() {
  'use strict';
  $('.menu-elem').css({
    "height": function () {
      return $(this).width();    
    }    
  }).children('.glyphicon').css(
    "font-size", $(this).width() / 6
  );
});