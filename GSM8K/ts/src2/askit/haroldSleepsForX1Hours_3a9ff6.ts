// Recompilation count: 0
export function haroldSleepsForX1Hours_3a9ff6({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Harold sleeps for 'x1' hours a night.  He works 'x2' hours less than he sleeps and he walks his dog for an hour each day.  How much free time does Harold have left in his day?
    let sleepHours = x1;
    let workHours = sleepHours - x2;
    let dogWalkingHours = 1;

    let totalHours = 24;
  
    let remainingHours = totalHours - (sleepHours + workHours + dogWalkingHours);
  
    return remainingHours;
}
