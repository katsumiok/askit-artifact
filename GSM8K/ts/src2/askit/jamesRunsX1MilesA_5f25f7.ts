// Recompilation count: 0
export function jamesRunsX1MilesA_5f25f7({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // James runs 'x1' miles a day for 'x2' days a week.  If he runs 'x3' miles an hour how many hours does he run a week?
        let totalMilesInAWeek = x1 * x2; // the total miles James runs in a week
        let hoursJamesRunsAWeek = totalMilesInAWeek / x3; // how many hours necessary for James to run totalMilesInAWeek 

        return hoursJamesRunsAWeek;
    }
