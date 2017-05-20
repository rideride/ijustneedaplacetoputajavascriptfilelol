// ==UserScript==
// @name         Response Times
// @description  Live Counting
// @author       /u/
// @namespace    none lol
// @include      *://*.reddit.com/live/*
// @exclude      *://*.reddit.com/live/create*
// @exclude      *://*.reddit.com/live/*/edit*
// @exclude      *://*.reddit.com/live/*/updates/*
// @exclude      *://*.reddit.com/live/*/contributors*
// ==/UserScript==



(function () {
  'use strict';
  // Setup variables
  var lc = $('.liveupdate-listing');
 

  lc.on('DOMNodeInserted', function (e) {
      
    var $node = $(e.target);
    // Must be a .liveupdate element
    if (!$node.hasClass('liveupdate')) {
      return;
    }    // Check that the new message is at the top
    // (Not loaded from bottom)

    var index = $node.index();
    if (index != 0) {
      return;
    }    // Color

      
           var magin = $node.find('.body').prev().attr('href');
           var magin2 = magin.replace('/live/ta535s1hq2je/updates/', '');
           var magin2p1 = magin2.substring(0, 8);
           var magin2p2 = parseInt(magin2p1, 16);
           var magin3 = $node.find('.body').parent().next().children().first().attr('href');
           var magin4 = magin3.replace('/live/ta535s1hq2je/updates/', '');
           var magin4p1 = magin4.substring(0, 8);
           var magin4p2 = parseInt(magin4p1, 16);
           var teenviopoemas = magin2p2 - magin4p2;
           var demipunoyletra = teenviopoemas / 10000;
           demipunoyletra = ~~demipunoyletra;
      
    
      $node.find('.river').css('position', 'absolute');
      $node.find('.body').prepend("<div id=river></div>");
document.getElementById("river").innerHTML = demipunoyletra;
      $( 'div#river' ).css('position', 'absolute').css('margin-left', '-135px').css('font-size', '9px').css('margin-top', '4px').css('background-color', '#aeeeff').css('width','120px').css('text-align','right').css('max-width','120px');

      
      
  });
}) ();

