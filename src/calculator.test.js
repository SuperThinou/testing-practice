import { add, subtract, divide, multiply } from "./calculator";

test("add", () => {
  expect(add(10, 5)).toBe(15);
});

test("sub", () => {
  expect(subtract(10, 5)).toBe(5);
});

test("divide", () => {
  expect(divide(10, 5)).toBe(2);
});

test("multiply", () => {
  expect(multiply(10, 5)).toBe(50);
});
