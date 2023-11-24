// Recompilation count: 0
export function panchoWalksX1MilesA_5056d5({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Pancho walks 'x1' miles a day. Except on weekends when he walks 'x2' miles. 
  // Assuming weekends mean Saturday and Sunday 
  // So Pancho walks x1 miles for 5 days (weekdays) and walks x2 miles for 2 days (weekends)
  let weekdayMiles = 5 * x1;
  let weekendMiles = 2 * x2;

  // Sum up weekday and weekend miles to get the total miles walked in a week
  return weekdayMiles + weekendMiles;
}
