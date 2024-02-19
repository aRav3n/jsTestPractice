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

test("Caesar Cipher of apple shifted by 1 is bqqmf", () => {
  expect(caesarCipher("apple", 1)).toBe("bqqmf");
});

test("Caesar Cipher of Andy shifted by 25 is Zmcx", () => {
  expect(caesarCipher("Andy", 25)).toBe("Zmcx");
});

test("Caesar Cipher of bottle shifted by 26 is bottle", () => {
  expect(caesarCipher("bottle", 26)).toBe("bottle");
});

test("average of array of 1 through 5 is 3", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toEqual(3);
});

test("min of array of 7 through 10 is 7", () => {
  expect(analyzeArray([7, 8, 9, 10]).min).toEqual(7);
});

test("max of array of -3 through 0 is 0", () => {
  expect(analyzeArray([-3, -2, -1, 0]).max).toEqual(0);
});

test("length of array of 1 through 7 is 7", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7]).length).toEqual(7);
});
