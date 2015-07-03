# DoWhen
A little helper class that tests a given condition in an given Interval  
until max loops are reached or the condition is true

# Useage
```javascript
var testFn   = function() {
        // your callback code
        console.log( '[testFn] called !' );
    },
    instance = new DoWhen( testestFn        // callback
                         , 'window.x === 5' // condition
                         , 15               // max   = 5   (optional)
                         , 500              // pause = 500 (optional)
    );
```

# toDo
* controlfunctions in the instance (stop, change, ...)

# License
copyleft by Stefan Friedl (k) all rights reversed  
[Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)