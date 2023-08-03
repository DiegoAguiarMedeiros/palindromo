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

test("should return true if 'Amor a Roma' is passed as parameter", () => {
  expect(isPalindromo("Amor a Roma")).toBe(true);
});

test("Check if 'hello' is not a palindrome", () => {
  expect(isPalindromo("hello")).toBe(false);
});

test("Check if 'A man, a plan, a canal, Panama!' is a palindrome", () => {
  expect(isPalindromo("A man a plan a canal Panama")).toBe(true);
});
test("Check if 'A man, a plan, a canal, Panama!' is a palindrome", () => {
  expect(isPalindromo("A man, a plan, a canal, Panama!")).toBe(true);
});
