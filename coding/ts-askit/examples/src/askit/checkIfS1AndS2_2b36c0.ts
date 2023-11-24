// Recompilation count: 0
export function checkIfS1AndS2_2b36c0({ s1, s2 }: {
  s1: string;
  s2: string;
}): boolean {
  // Check if 's1' and 's2' are anagrams.
  const sortedS1 = s1.split('').sort().join('');
  const sortedS2 = s2.split('').sort().join('');

  return sortedS1 === sortedS2;
}
