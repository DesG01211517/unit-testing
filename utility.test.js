// utility.test.js

const {
  isPalindrome,
  fibonacci,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  factorial,
} = require("./utility");

describe("isPalindrome", () => {
  test("should return true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("should return false for a non-palindrome word", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("should be case insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("should ignore spaces, punctuation, and special characters", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });
});

describe("fibonaccci", () => {
  test("Should return 3 when nth number is 5", () => {
    expect(fibonacci(5)).toBe(5);
  });
});

describe("fahrenheitToCelsius", () => {
  test("Should return 30 when 80", () => {
    expect(fahrenheitToCelsius(86)).toBe(30);
  });
});

describe("celsiusToFahrenheit", () => {
  test("Should return 86 when 30", () => {
    expect(celsiusToFahrenheit(30)).toBe(86);
  });
});

describe("factorial", () => {
  test("Should return 720 when 6", () => {
    expect(factorial(6)).toBe(720);
  });
});
