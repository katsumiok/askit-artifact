// Recompilation count: 4
export function timGetsAPromotionThat_2e1207({}: {}): number {
  // Tim's salary per month after a 5% raise
  const monthlySalary: number = 20000 + (20000 * 0.05);
  
  // Tim's annual bonus worth half a month's salary
  const annualBonus: number = monthlySalary * 0.5;

  // Tim's annual salary
  const annualSalary: number = monthlySalary * 12;

  // Total money Tim will make in a year
  const totalMoney: number = annualSalary + annualBonus;

  return totalMoney;
}
