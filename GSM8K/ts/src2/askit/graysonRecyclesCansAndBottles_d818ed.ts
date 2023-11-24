// Recompilation count: 0
export function graysonRecyclesCansAndBottles_d818ed({}: {}): number {
  // Define the value of each can and bottle
  let canValue: number = 2;
  let bottleValue: number = 3;

  // Define the number of cans and bottles consumed by Grayson each week
  let cansPerWeek: number = 3;
  let bottlesPerWeek: number = 5;

  // Calculate the total value earned each week
  let weeklyEarnings: number = (cansPerWeek * canValue) + (bottlesPerWeek * bottleValue);

  // Now calculate the monthly earnings over four weeks
  let monthlyEarnings: number = weeklyEarnings * 4;

  // Return the monthly earnings
  return monthlyEarnings;
}
