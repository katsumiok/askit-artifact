// Recompilation count: 0
export function findTheFactorialOfN_7aef58({ n }: {
  n: number;
}): number {
  // Find the factorial of 'n'.
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
