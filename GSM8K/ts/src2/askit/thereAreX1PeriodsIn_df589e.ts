// Recompilation count: 0
export function thereAreX1PeriodsIn_df589e({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Calculate the total number of periods per day
    const totalNumberOfPeriods = x1 + x2;

    // Calculate the total minutes spent in class per day
    const totalMinutesPerDay = totalNumberOfPeriods * x3;

    // Calculate the total minutes spent in class in the week (5 days)
    const totalMinutesPerWeek = totalMinutesPerDay * x4;

    // Calculate extra learning time on weekends
    const extraLearningTime = totalMinutesPerWeek / 16; //1/16 of weekly minutes each on Saturday and Sunday

    // Calculate total learning time in a week
    const totalLearningTimePerWeekInMinutes = totalMinutesPerWeek + extraLearningTime * 2; // multiplied by 2 for Saturday and Sunday

    // Convert the total learning time from minutes to hours and return it
    return totalLearningTimePerWeekInMinutes / 60;
}
