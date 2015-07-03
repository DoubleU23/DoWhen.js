var DoWhen   = function(fn, condition, max, pause) {
    "use strict";
    if( !fn ){ console.error('no callback Function given'); return 0; }
    if( !c  ){ console.error('no condition given'); return 0; }
    
    var _this   = this;

    this.fn     = this.fn    || fn    || function(){};
    this.max    = this.max   || max   || 5;
    this.pause  = this.pause || pause || 500;
  
    this.counter    = 0;
    this.testFn     = this.testFn || new Function(
        'return '+condition
    );
    
    this.testFnIntervalFn   = function(){
        console.log('new interval loop... counter at ', _this.counter);
        var result   = _this.testFn();
        if( result ){
            console.log('condition is TRUE!');
            _this.fn();
        }else{
            console.log('condition is FALSE!');
            this.counter++;
        }
        if( _this.counter >= _this.max || result ){
            window.clearInterval( _this.testFnInterval );
        }
    };
    
    this.testFnInterval  = window.setInterval( function(){
        _this.testFnIntervalFn();
    }, pause);
};