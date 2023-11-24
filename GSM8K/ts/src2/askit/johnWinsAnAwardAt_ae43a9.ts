// Recompilation count: 0
export function johnWinsAnAwardAt_ae43a9({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Calculate money from the award
  const awardMoney = x1 * 5000;

  // Calculate his weekly salary with 5% raise
  const weeklySalaryAfterRaise = x2 * 1.05;

  // Calculate the total money he made after the raise for the entire year (52 weeks)
  const totalSalaryAfterRaiseForYear = weeklySalaryAfterRaise * 52;

  // Sum all the money
  const totalMoney = awardMoney + totalSalaryAfterRaiseForYear;

  return totalMoney;
}
