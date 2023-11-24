// Recompilation count: 0
export function craigHasX1TwentyDollar_43ca40({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  const initialMoney = x1 * 20; // Total money Craig has
  const squirtGunsCost = 6 * 2; // Total cost of squirt guns
  const waterBalloonsCost = x2 * 3; // Total cost of water balloons
  const remainingMoney = initialMoney - squirtGunsCost - waterBalloonsCost; // The money Craig has left
  return remainingMoney;
} 
