// 1. Function Expression: divide
const divide = function(a, b) {
    return a / b;
  };
  
  // 2. Arrow Function: square
  const square = x => x * x;
  
  // 3. Arrow Function: add
  const add = (a, b) => a + b;
  
  // 4. Using Arrow Functions with .map()
  const numbers = [1, 2, 3, 4];
  const squares = numbers.map(x => x ** 2);
  
  // 5. Using Arrow Functions with .filter()
  const evens = numbers.filter(x => x % 2 === 0);
  
  // 6. Example Function: multiply (using arrow syntax)
  const multiply = (a, b) => a * b;
  
  // 7. Example Function: subtract (using arrow syntax)
  const subtract = (a, b) => a - b;
  
  // 8. Example Function: greet (using arrow syntax)
  const greet = name => `Hello, ${name}!`;
  
  // Exporting functions for testing (if required)
  module.exports = {
    divide,
    square,
    add,
    squares,
    evens,
    multiply,
    subtract,
    greet
  };