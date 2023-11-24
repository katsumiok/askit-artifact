// Recompilation count: 0
export function checkIfNIsA_f1334b({ n }: {
  n: number;
}): boolean {
  // Convert 'n' to a string
  const str = n.toString();
  
  // Reverse the string
  const reversedStr = str.split('').reverse().join('');
  
  // Check if the original and reversed strings are equal
  return str === reversedStr;
}
