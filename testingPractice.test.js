import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testingPractice.js";

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
