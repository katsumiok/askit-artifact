// Recompilation count: 8
export function jerryHasTwoPoolsBoth_bd416b({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // The amount of water leaking from both pools every minute is the same - 'x1'
  // 'x2' minutes ago, the big pool had twice as much water as the small pool, hence bigPool = smallPool * 2
  // Now, the big pool has four times as much water as the small pool, hence bigPool = smallPool * 4
  // Because water is leaking at the same rate from both pools, the big pool lost twice the amount that the small pool did. Therefore:
  // smallPool * 2 - x1 * x2 = smallPool * 4
  // After simplification: x1 * x2 = smallPool * 2
  // Hence the small pool now has [x1 * x2 / 2] gallons of water

  let smallPool = (x1 * x2) / 2;
  return smallPool;
}
