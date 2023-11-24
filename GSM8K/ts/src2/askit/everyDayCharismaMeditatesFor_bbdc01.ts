// Recompilation count: 9
export function everyDayCharismaMeditatesFor_bbdc01({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Every day Charisma meditates for 'x1' minutes when she first wakes up and again before she goes to sleep. 
        // 'x2' days a week she practices 'x3' hour of yoga.  
        // In 'x4' weeks, how much time has she spent on meditation/yoga practice?

        // Daily meditation time is twice 'x1' (wake up and sleep), convert to hours
        let dailyMeditation = 2 * x1 / 60;

        // Weekly yoga time is 'x3' hours times 'x2' days
        let weeklyYoga = x3 * x2;

        // Weekly total time is daily meditation times 7 (days in a week) plus weekly yoga
        let weeklyTotal = dailyMeditation * 7 + weeklyYoga;

        // Total time spent over 'x4' weeks is weekly total times 'x4'
        let totalTime = weeklyTotal * x4;

        return totalTime;
    }
