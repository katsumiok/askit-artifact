// Recompilation count: 0
export function laurenIsSaving_20Of_e4cacd({ x1 }: { x1: number; }): number {
  // Assuming 20% savings from the current salary of $100,000
  const yearlySaving = 0.2 * 100000;

  // Living with 40% of current annual salary during retirement
  const yearlyExpenseDuringRetirement = 0.4 * 100000;

  // Amount needed for retirement
  const totalRequiredForRetirement = yearlyExpenseDuringRetirement * x1;

  // Years Lauren need to work to save for retirement
  const yearsToWork = totalRequiredForRetirement / yearlySaving;

  return yearsToWork;
}
