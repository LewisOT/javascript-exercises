const add = function(a,b) {
  return a+b
    
  };
  
  const subtract = function(a,b) {
    return a-b
  };
  
  const sum = function(a) {
    let cup = 0;
    for (let i = 0; i < a.length; i++) {
      cup += a[i]
    }
    return cup
    
  };
  
  const multiply = function(a) {
    let cup = 1;
    console.log("initial: " + cup)
    for (let i = 0; i < a.length; i++) {
      console.log("increment: " + i)
      console.log("index: " + a[i])
      cup *= a[i]
      console.log("increment results: " + cup)
    }
    return cup
  };
  console.log(multiply([2,4]))
  
  
  
  const power = function(a,b) {
    return a**b
    
  };
  
  const factorial = function(a) {
    let cup = 1;
    for (let i = 1 ; i <= a; i++) {
      cup *= i
    }
    return cup
    
  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
