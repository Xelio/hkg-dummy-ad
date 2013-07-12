// ==UserScript==
// @name       HKG Dummy ad
// @namespace  http://xelio.eu.org
// @version    1.0
// @description  Avoid getting redirected to blank page by the buggy adblock detecting script
// @include    http://www.hkgolden.com/*
// @include    http://forum*.hkgolden.com/*
// @run-at document-start
// @copyright  2013+, Xelio
// ==/UserScript==

/*
HKG Dummy ad (HKGolden Dummy ad)
Copyright (C) 2013 Xelio Cheong

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function wrapper() {
  // Load domready
  // https://github.com/ded/domready
  /*!
  * domready (c) Dustin Diaz 2012 - License MIT
  */
  !function(a,ctx,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):ctx[a]=b()}("domready",this,function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})
  // End load domready

  domready(function () {
    var myTestAds = document.getElementsByClassName ? document.getElementsByClassName('myTestAd') : [];

    var dummyAd = (myTestAds.length > 0) ? myTestAds[0] : document.createElement('div');

    dummyAd.setAttribute('class', 'myTestAd');
    dummyAd.style.height = '1px';
    dummyAd.style.width = '1px';
    dummyAd.style.display = 'none';

    if(myTestAds.length > 0) {
      document.body.insertBefore(dummyAd, document.body.firstElementChild);
    }
  });
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ wrapper +')();'));
document.head.appendChild(script);