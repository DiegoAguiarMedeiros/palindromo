import isPalindromo from "./index";

test("should import the function", () => {
  isPalindromo("");
});

test("should accept a string as parameter", () => {
  isPalindromo("");
});

test("should return false if '' is passed as parameter", () => {
  expect(isPalindromo("")).toBe(false);
});
