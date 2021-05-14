import JSrunner from 'javascript-code-runner';

import {
    codeNoRun, codeWithComment, codeWithCommentResult, codeWithUndefined, emptyCode, fibonacciCode,
    fibonacciResult, resultCodeNoRun, resultEmptyCode, resultWithUndefined, syntaxErrorCode,
    syntaxErrorResult, typeErrorCode, typeErrorResult
} from '../mocks';

test("fibonacci code to equal result", () => {
  const { result, message } = JSrunner(fibonacciCode);
  expect(result).toBe(fibonacciResult);
  expect(message).toBe(null);
});

test("code with syntax error to equal syntax message", () => {
  const { result, message } = JSrunner(syntaxErrorCode);
  expect(result).toBe(null);
  expect(message).toBe(syntaxErrorResult);
});

test("code with type error to equal type message", () => {
  const { result, message } = JSrunner(typeErrorCode);
  expect(result).toBe(null);
  expect(message).toBe(typeErrorResult);
});

test("code with comment to equal result array", () => {
  const { result, message } = JSrunner(codeWithComment);
  expect(result).toBe(codeWithCommentResult);
  expect(message).toBe(null);
});

test("code with undefined", () => {
  const { result, message } = JSrunner(codeWithUndefined);
  expect(result).toBe(null);
  expect(message).toBe(resultWithUndefined);
});

test("empty code", () => {
  const { result, message } = JSrunner(emptyCode);
  expect(result).toBe(null);
  expect(message).toBe(resultEmptyCode);
});

test("code not called", () => {
  const { result, message } = JSrunner(codeNoRun);
  expect(result).toBe(null);
  expect(message).toBe(resultCodeNoRun);
});
