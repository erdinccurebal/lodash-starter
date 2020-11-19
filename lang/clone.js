const _ = require('lodash');

var obj = { 
    x: 23 
}; 
  
var shallowCopy = _.clone(obj); 
  
console.log('Comparing original with'
    + ' shallow ', obj === shallowCopy); 
  
obj.x = 10; // Changing original value 
  
console.log('After changing original value'); 
  
console.log("Original value ", obj); 
  
console.log("Shallow Copy value ", shallowCopy); 

// clone - Veriyi kopyalar ve ilk halini korur.
