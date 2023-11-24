// Recompilation count: 0
export function grandmaWalksX1MilesEvery_b80ae7({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // the speed on the beach
        const beachSpeed = x2 / x4;

        // the speed on the sidewalk is twice as much as on the beach
        const sidewalkSpeed = 2 * beachSpeed;

        // time she spent walking on the sidewalk
        const sidewalkTime = x3 / sidewalkSpeed;

        // return total time
        return x4 + sidewalkTime;
    }
