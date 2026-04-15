import { caesarCipher } from "./caesar-cipher";

test("cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
