// Recompilation count: 0
export function jordanPlaysVideoGamesFor_98c564({ x1 }: {
    x1: number;
}): number {
  // Calculate earnings based on the time Jordan spends playing video games
  // Instead of playing, he could have worked and earned $10/hour
  let hourly_rate = 10;
  let days_in_week = 7;
  let earnings = x1 * hourly_rate * days_in_week;

  // Return the total earnings for one week
  return earnings;
}
