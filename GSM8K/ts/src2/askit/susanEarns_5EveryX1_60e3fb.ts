// Recompilation count: 0
export function susanEarns_5EveryX1_60e3fb({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Convert x2 and x3 from hours to minutes
  const startTimeInMinutes = x2 * 60;
  const endTimeInMinutes = x3 * 60;

  // Calculate total work time in minutes, subtract pause time
  const totalWorkTimeInMinutes = endTimeInMinutes - startTimeInMinutes - 30;

  // Calculate how many times Susan completes tasks
  const totalTasks = Math.floor(totalWorkTimeInMinutes / x1);

  // Calculate total earning
  const totalEarning = totalTasks * 5;

  return totalEarning;
}
