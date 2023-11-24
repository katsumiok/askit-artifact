// Recompilation count: 0
export function thereAreX1BeesIn_8d8851({ x1 }: {
    x1: number;
}): number {
        // We know that there are x1 bees in total. They are divided into 3 groups: queens, babies and workers
        // with queens being the smallest group, babies twice as many as queens and workers twice as many as babies.
        // This can be translated into: queens + 2*queens + 4*queens = x1
        // So in total we have 7 'parts' of bees. Let's divide the total number of bees by 7 to find out how many bees there are in one 'part'
        let onePart = x1 / 7;
        // worker bees are 4 parts out of 7 in total
        let workerBees = 4 * onePart;
        // return the number of worker bees, rounding it to the nearest whole number to avoid half bees
        return Math.round(workerBees);
    }
