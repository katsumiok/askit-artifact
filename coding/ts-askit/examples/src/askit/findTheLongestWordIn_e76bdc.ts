// Recompilation count: 0
export function findTheLongestWordIn_e76bdc({ s }: {
  s: string;
}): string {
  // Find the longest word in 's'
  const words = s.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
