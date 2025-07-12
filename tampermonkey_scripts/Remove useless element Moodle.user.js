// ==UserScript==
// @name         Remove useless element Moodle
// @namespace    http://tampermonkey.net/
// @version      2024-12-04
// @description  Get my life better
// @author       You
// @match        https://moodle.ciencias.ulisboa.pt/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ulisboa.pt
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
    document.getElementById('page-header').remove();
    }, false);
    // Your code here...
})();