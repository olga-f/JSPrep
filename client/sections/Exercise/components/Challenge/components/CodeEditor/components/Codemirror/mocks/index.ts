export const fibonacciCode = `
const result = [];
const fibonacci = (n, result) => {
  var a = 1, b = 1, sum;
  for (var i = 0; i < n; i++) {
    result.push(a);
    sum = a + b;
    a = b;
    b = sum;
  }
}
fibonacci(12, result);
result.join(', ');
`;
export const fibonacciResult = `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144`;

export const syntaxErrorCode = `
Math.ceil(4.9;
`;

export const syntaxErrorResult = `SyntaxError: unknown: Unexpected token, expected "," (2:13)

  1 |
> 2 | Math.ceil(4.9;
    |              ^
  3 |`;

export const typeErrorCode = `
  window.printme();`;
export const typeErrorResult = `TypeError: undefined is not a function`;

export const codeWithComment = `
function squareArrayOutOfPlace(intArray) {
  // We allocate a new array that we'll fill in with the new values
  const squaredArray = [];

  intArray.forEach((int, index) => {
    squaredArray[index] = Math.pow(int, 2);
  });

  return squaredArray;
}
const originalArray = [2, 3, 4, 5];
squareArrayOutOfPlace(originalArray);`;
export const codeWithCommentResult = `4,9,16,25`;

export const codeWithUndefined = `
const result = [];
const fibonacci = (n, result) => {
  var a = 1, b = 1, sum;
  for (var i = 0; i < n; i++) {
    result.push(a);
    sum = a + b;
    a = b;
    b = sum;
  }
}
fibonacci(12, result);
`;
export const resultWithUndefined = `Undefined function or variable`;

export const emptyCode = `  `;
export const resultEmptyCode = `There's no code to execute.`;

export const codeNoRun = `
function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
`;
export const resultCodeNoRun = `The code does not execute.`;
