import { calculator } from "./calculator";

test("add", () => {
  expect(calculator.add(10, 5)).toBe(15);
});

test("sub", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("divide", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("multiply", () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});
