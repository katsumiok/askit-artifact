// Recompilation count: 0
export function markWorksAtHisJob_d6deaa({ x1, x2 }: {
  x1: number;
  x2: number;
}): number {
  // Mark works at his job for 'x1' hours a day for 'x2' days a week. 
  // He used to make $10 an hour but they raised his pay by $2 per hour.
  // How much does he make a week?

  // after the raise, Mark's hourly rate is $12
  let hourlyRate = 10 + 2;
  // and he works 'x1' hours a day for 'x2' days a week
  let weeklyPay = x1 * x2 * hourlyRate;

  return weeklyPay;
}
