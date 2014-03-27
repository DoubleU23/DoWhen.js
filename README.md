# DoWhen
A little helper class that tests a given condition in an given Interval until max loops are reached or the condition is true

# Useage
```javascript
var testFn   = function() {
	// your callback code
	console.log( '[testFn] called !' );
};
var instance = new DoWhen( testestFn
                         , 'window.x === 5' // condition
                         , 15               // max
                         , 500              // pause
);
```

# License
copyleft by Stefan Friedl (k) all rights reversed
[Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)