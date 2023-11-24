// Recompilation count: 0
export function generateTheFibonacciSequenceUp_ffd7ca({ n }: { n: number }): number[] {
  const fibonacciSequence: number[] = [0, 1];
  
  if (n <= 1) {
    return fibonacciSequence.slice(0, n + 1);
  }
  
  for (let i = 2; i <= n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }

  return fibonacciSequence;
}
