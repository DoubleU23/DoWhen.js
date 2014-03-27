var DoWhen   = function(fn, condition, max, pause) {
    "use strict";
    var _this   = this;

    this.fn     = this.fn    || fn    || function(){};
    this.max    = this.max   || max   || 5;
    this.pause  = this.pause || pause || 500;
  
    this.counter    = 0;
    this.testFn     = this.testFn || new Function(
        'return '+condition
    );
    
    this.testFnIntervalFn   = function(){
        log('Inteval startet... counter at ', _this.counter);
        if( _this.testFn() ){
            log('condition is true!');
            _this.fn();
        }else{
            this.counter++;
        }
        if( _this.counter >= _this.max || _this.testFn() ){
            window.clearInterval( _this.testFnInterval );
        }
    };
    
    this.testFnInterval  = window.setInterval( function(){
        _this.testFnIntervalFn();
    }, pause);
};

var testestFn   = function() {
    log('testestFn called!!!');
};

new DoWhen(testestFn, 'jQuery(".wpxp-pageLayoutTitleArea").length === 1', 51, 1000);
//new DoWhen(testestFn, '1 === 1');