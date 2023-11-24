// Recompilation count: 0
export function aCustodianHasToClean_86cc3b({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // A custodian has to clean a school with 'x1' classrooms. They have 'x2' days to get it done. It takes them 'x3' minutes per classroom. If they work an 'x4' hour day, what percentage of their day, on average, is spent cleaning classrooms?

    // Total cleaning time in minutes
    const totalCleaningTime = x1 * x3;

    // Total work time in minutes over the entire cleaning period
    const totalWorkTime = x2 * x4 * 60;

    // Average percentage of their day spent cleaning
    const cleaningPercentage = (totalCleaningTime / totalWorkTime) * 100;

    return cleaningPercentage;
}

