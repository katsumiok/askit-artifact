// Recompilation count: 0
export function ducksNeedToEat_3_999fd9({}: {}): number { 
  // Ducks need to eat 3.5 pounds of insects each week to survive. If there is a flock of ten ducks, how many pounds of insects do they need per day?

  const ducks = 10;
  const poundsPerWeekPerDuck = 3.5;
  const daysPerWeek = 7;

  const totalPoundsPerWeek = ducks * poundsPerWeekPerDuck;
  const totalPoundsPerDay = totalPoundsPerWeek / daysPerWeek;

  return totalPoundsPerDay;
}
