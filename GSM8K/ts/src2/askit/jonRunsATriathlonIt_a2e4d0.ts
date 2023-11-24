// Recompilation count: 1
export function jonRunsATriathlonIt_a2e4d0({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // Jon's total time in minutes is the sum of his swim, ride and run times.
        const jonTotal = x1 + (60 + x2) + x3;

        // James' total time in minutes is Jon's total time plus x5 because Jon won by x5 minutes.
        const jamesTotal = jonTotal + x5;

        // James' time for the swim is 10% less than Jon's
        const jamesSwim = x1 - (x1 * 0.1);

        // James' time for the bike ride is Jon's ride time plus x4 minutes.
        const jamesRide = (60 + x2) + x4;

        // To find James' time for the run, we subtract his swim and ride times from his total time.
        const jamesRun = jamesTotal - jamesSwim - jamesRide;

        return jamesRun;
}
