const divide = (a, b) => a / b;
const square = x => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const modulus = (a, b) => a % b;

const calculate = (num1, num2, operator) => {
    switch(operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      case '%':
        return modulus(num1, num2);
      default:
        return null;
    }
  };
  
