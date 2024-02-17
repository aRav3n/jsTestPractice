const sum = require("./sum");

test("Add 2 and 3", () => {
  expect(sum(2, 3)).toBe(5);
});
