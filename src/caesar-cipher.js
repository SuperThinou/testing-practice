export function caesarCipher(str, shiftFactor) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return str
    .split("")
    .map((char) => {
      const lowerChar = char.toLowerCase();
      const index = alphabet.indexOf(lowerChar);

      if (index === -1) return char;

      const newIndex = (index + shiftFactor) % 26;

      const shiftedChar = alphabet[newIndex];

      return char === char.toUpperCase()
        ? shiftedChar.toUpperCase()
        : shiftedChar;
    })
    .join("");
}
