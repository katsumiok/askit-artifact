// Recompilation count: 0
export function georgeAGradeSixTeacher_d4d274({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Compute the total burritos that were taken
  const totalTaken = (x2 * 10) + x3;

  // Subtract the total burritos taken from the total burritos ordered
  return x1 - totalTaken;
}
