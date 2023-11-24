// Recompilation count: 0
export function onAParticularWeekA_c8c558({}: {}): number { 
    // On a particular week, a tow truck pulled ten cars for each of the first three days and then four fewer cars on each of the remaining days of the week. Calculate the total number of cars it towed that week.
    const initialDays = 3;
    const subsequentDays = 7 - initialDays; // 7 days in a week
    const initialDailyTowCount = 10;
    const subsequentDailyTowCount = initialDailyTowCount - 4;
    
    let totalTow = (initialDays * initialDailyTowCount) + (subsequentDays * subsequentDailyTowCount);

    return totalTow;
}
