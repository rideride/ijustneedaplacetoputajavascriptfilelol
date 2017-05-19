// ==UserScript==
// @name        time
// @namespace   time
// @description time
// @include     *://*.reddit.com/live/*
// @version     1
// @grant       none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

function func1() {
  //document.body.innerHTML += "bla blb";
  //document.getElementById("liveupdate-title").textContent += "This is some text";
  //document.getElementsByClassName("live-timestamp").textContent += "This is some text";
  $( ".live-timestamp" ).append( "Test" );
  //document.getElementById("liveupdte").textContent += "New text!";
  //document.getElementById('time.live-timesstamp').appendChild(document.createElement("div"));
}

window.onload = func1;
