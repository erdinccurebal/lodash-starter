const _ = require('lodash'); 
  
let func = number => { 
  console.log(number); 
}; 
  
for(let i = 1; i <= 5; i++) { 
    _.defer(func, i); 
} 
  
console.log('Integers are as follows:'); 

// defer - Fonksiyonun ard arda çağırılmasını engeller.