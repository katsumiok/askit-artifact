// Recompilation count: 0
export function twoSportsCoachesWentShopping_1d1661({ x1, x2 }: {
    x1: number;
    x2: number;
}): number { 
  // The baseball coach bought 'x1' new baseballs for $3 each.
  let baseballCoachSpend = x1 * 3; 
  // The basketball coach bought 'x2' new basketballs for $14 each.
  let basketballCoachSpend = x2 * 14;
  // Calculate the difference of spendings
  let difference = basketballCoachSpend - baseballCoachSpend;

  // return the difference
  return difference; 
}
