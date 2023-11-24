// Recompilation count: 0
export function findTheMostFrequentlyOccurring_881d89({ s }: {
  s: string;
}): string {
  const words = s.split(" ");
  const wordCountMap = new Map<string, number>();

  for (const word of words) {
    const count = wordCountMap.get(word) || 0;
    wordCountMap.set(word, count + 1);
  }

  let mostFrequentWord = "";
  let maxCount = 0;
  for (const [word, count] of wordCountMap) {
    if (count > maxCount) {
      mostFrequentWord = word;
      maxCount = count;
    }
  }

  return mostFrequentWord;
}
