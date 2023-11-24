// Recompilation count: 0
export function nickHadTwiceAsMany_a71b33({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Nick had twice as many candies as George. Then George ate 'x1' candies. Now George has 'x2' candies left. How many candies does Nick have?
        let georgeInitCandies = x2 + x1;
        return georgeInitCandies * 2;
    }
