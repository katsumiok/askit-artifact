// Recompilation count: 0
export function conorLivesNearABeach_89e0c0({ x1, x2, x3 }: {
    x1: number;
    x2: number,
    x3: number;
}): number {
    // People Conor saw for the first three days
    let firstThreeDays = x1 + (x1 + x2) + 2 * (x1 + x2);
  
    // People Conor saw for the rest of the week
    let restOfTheWeek = x3 * 4; // Four more days in the week after the first three
  
    // Total people Conor saw that week
    let totalPeople = firstThreeDays + restOfTheWeek;
  
    return totalPeople;
}
