import expect from "expect";
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testingPractice.js";
import { cadetblue } from "color-name";

test("capitalize nadeesha", () => {
  expect(capitalize("nadeesha")).toBe("Nadeesha");
});

test("capitalize rYaN", () => {
  expect(capitalize("rYaN")).toBe("Ryan");
});

test("verify 3 isn't a number", () => {
  expect(capitalize(3)).toBeNull();
});

test("verify 3 isn't a number", () => {
  expect(reverseString(3)).toBeNull();
});

test("Verify 'abc' turns into 'cba'", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("Verify 'Han Solo' turns into 'oloS naH'", () => {
  expect(reverseString("Han Solo")).toBe("oloS naH");
});

test("1 + 1 = 2", () => {
  expect(calculator.add(1, 1)).toEqual(2);
});

test("a + b is null", () => {
  expect(calculator.add("a", "b")).toBeNull();
});

test("7 - 3 = 4", () => {
  expect(calculator.subtract(7, 3)).toEqual(4);
});

test("3 * 6 = 18", () => {
  expect(calculator.multiply(3, 6)).toEqual(18);
});

test("21 / 3 = 7", () => {
  expect(calculator.divide(21, 3)).toEqual(7);
});
