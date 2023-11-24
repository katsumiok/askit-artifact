// Recompilation count: 0
export function vincentCanBuyFlowersIn_2a49f4({ x1, x2, x3 }: {
  x1: number;
  x2: number;
  x3: number;
}): number {
  // Vincent can buy flowers in packages of 'x1' for $2.50 or in packages of 'x2' for $1. How much money does he save by buying 'x3' flowers at the better price?
  
  const pricePerFlowerInX1 = 2.50 / x1;
  const pricePerFlowerInX2 = 1 / x2;
  
  const moneySpentAtX1Price = pricePerFlowerInX1 * x3;
  const moneySpentAtX2Price = pricePerFlowerInX2 * x3;
  
  return moneySpentAtX1Price > moneySpentAtX2Price ? moneySpentAtX1Price - moneySpentAtX2Price : 0;
}
