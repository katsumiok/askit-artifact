// Recompilation count: 0
export function johnAndDeseanBoughtA_cd66aa({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // calculate the remaining marshmallows
        let remainingMarshmallows = x1 - x2 - x3 - x4;
        // since each kid can have the same number of S'mores, divide the total number 
        // of remaining marshmallows by two and return it
        return Math.floor(remainingMarshmallows / 2);
    }
