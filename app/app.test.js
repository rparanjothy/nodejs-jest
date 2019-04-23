
jest.mock('./functions')

const functions  = require("./functions");


test("first test", () => {
  expect(functions.add(1, 1)).toBe(2);
});
