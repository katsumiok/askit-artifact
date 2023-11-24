// Recompilation count: 0
export function coachBroughtOneBagFilled_698f0c({ x1 }: {
    x1: number;
}): number {
    // Jordan carried twice as many balls as Jason,
    let jordanBalls = 2 * x1;
  
    // Jason carried twice as many balls as Jeffrey
    let jeffreyBalls = x1 / 2;

    // total number of balls that the coach brought to practice
    let totalBalls = x1 + jordanBalls + jeffreyBalls;

    return totalBalls;
}
