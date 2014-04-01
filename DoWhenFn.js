/* class DoWhen
 *
 * Description:
 *     Tests c(ondition) in an interval of p(ause) until m(ax) loops or c(ondition) is true
 *     if c(condition) is true - f(un)n(ction) is called and the interval cleared
 *
 * Licence:
 *     copyleft by Stefan Friedl (k) all rights reversed
 *     Attribution-NonCommercial-ShareAlike 4.0 International
 *     http://creativecommons.org/licenses/by-nc-sa/4.0/
 */

/**
 * Tests c(ondition) in an Interval of p(ause) until m(ax) loops or c(ondition) is true
 *  if c(condition) is true - f(un)n(ction) is called
 * 
 * @constructor
 * @param {function}    fn callback function
 * @param {string}      c  condition to check
 * @param {int}         m  max loops to check c
 * @param {int}         p  interval pause
 */
var DoWhen   = function(fn, c, m, p) {
    "use strict";
    if( !fn ){ console.error('no callback Function given'); return 0; }
    if( !c  ){ console.error('no condition given'); return 0; }

    var t       = this;
    t.fn        = t.fn  || fn   || function(){};
    t.m         = t.m   || m    || 5;
    t.p         = t.p   || p    || 500;
    t.n         = 0;
    t.tFn       = t.tFn || new Function('return '+c);
    
    t.iFn   = function(){
        if( t.tFn() ){
            // do the magic
            t.fn();
        }else{
            t.n++;
        }
        if( t.n >= t.m || t.tFn() ){
            window.clearInterval( t.i );
        }
    };
    
    t.i  = window.setInterval( function(){
        t.iFn();
    }, p);
};