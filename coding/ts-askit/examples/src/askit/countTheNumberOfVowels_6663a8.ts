// Recompilation count: 0
export function countTheNumberOfVowels_6663a8({ s }: {
  s: string;
}): number {
  // Count the number of vowels in 's'.
  return s.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
}
