// Recompilation count: 0
export function implementABasicCaesarCipher_2bb944({ s, shift }: {
  s: string;
  shift: number;
}): string {
  // Implement a basic Caesar cipher on 's' with a shift of 'shift'.
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
    } else {
      // Non-alphabetic characters
      result += s[i];
    }
  }

  return result;
}
