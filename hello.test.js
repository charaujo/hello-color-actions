const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola MIT desde Guatemala, haciendo GitHub actions");
  });
});
