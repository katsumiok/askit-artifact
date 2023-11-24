// Recompilation count: 0
export function theJumboBottleOfShampoo_b66f6a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // First, convert shampoo cost ($24.00) to cents (1 dollar = 100 cents)
  const shampooCostInCents: number = 24 * 100;

  // Then, calculate the total number of pumps.
  const totalPumps: number = x1 * x2;

  // Calculate the cost per pump when Jackie uses 'x3' pump per wash.
  const costPerPump: number = shampooCostInCents / (totalPumps / x3);

  // Return the cost per pump
  return costPerPump;
}
