jest.mock("./functions");
jest.mock("axios");

const functions = require("./functions");
const axios = require("axios");
const app = require("./app");

test("first test", () => {
  expect(functions.add(1, 1)).toBe(2);
});

test("test increment for 10", () => {
  expect(app.increment(10)).toBe(20);
});

// test("get email", () => {
//   app.getEmail().then(data => expect(data.email).toBe("rp@r.com")).catch();
// });

test("getEmail test", () => {
  app.getEmail().then(data => {
    console.log(data);
    expect(data)
      .toBe("rp@r.com")
  });
});
