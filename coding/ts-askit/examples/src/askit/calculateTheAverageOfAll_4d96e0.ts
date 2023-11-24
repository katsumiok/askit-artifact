// Recompilation count: 0
export function calculateTheAverageOfAll_4d96e0({ ns }: { ns: number[] }): number {
  // Calculate the average of all numbers in 'ns'.
  if (ns.length === 0) {
    return 0;
  }
  const sum = ns.reduce((acc, curr) => acc + curr, 0);
  const average = sum / ns.length;
  return average;
}
