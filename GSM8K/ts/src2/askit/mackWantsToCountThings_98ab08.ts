// Recompilation count: 0
export function mackWantsToCountThings_98ab08({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number { 
    let totalBirds = x1 + x2 + x3 + 90; // total birds Mack saw in a week
    let averageBirdsPerDay = totalBirds / 7; // average birds Mack saw in a day
  
    return averageBirdsPerDay;
}
