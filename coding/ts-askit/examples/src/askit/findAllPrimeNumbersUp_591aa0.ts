// Recompilation count: 0
export function findAllPrimeNumbersUp_591aa0({ n }: {
  n: number;
}): number[] {
  const primes: number[] = [];

  // Check if number is prime
  function isPrime(num: number): boolean {
    if (num === 2) {
      return true;
    }

    if (num < 2 || num % 2 === 0) {
      return false;
    }

    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  // Find all prime numbers up to 'n'
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}
