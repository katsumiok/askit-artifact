// Recompilation count: 0
export function bobIsX1MilesAhead_f6c72b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Bob is 'x1' miles ahead of Tom, driving 'x2' miles per hour. Tom is driving 'x3' miles per hour. 
        // How long will it take Tom to catch up with Bob?
        // Tom needs to make up the 'x1' miles gap, but he gains on Bob 'x3 - x2' miles each hour, so, it should be divided by 'x3 - x2'.
        // If Tom's speed is less or equal to Bob's speed, Tom will never catch up with Bob. 
        if (x3 <= x2) {
            throw new Error("Tom will never catch up with Bob");
        }
        return x1 / (x3 - x2);
    }
