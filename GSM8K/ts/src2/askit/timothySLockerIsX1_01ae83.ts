// Recompilation count: 0
export function timothySLockerIsX1_01ae83({ x1 }: {
    x1: number;
}): number {
        // Timothy's locker is 'x1' cubic inches. Zack's locker is half as big as Timothy's locker. Peter's locker is 1/4 as big as Zack's locker. 
        // Let's find out how big is Peter's locker in cubic inches.
        const zackLockerSize = x1 / 2;
        const peterLockerSize = zackLockerSize / 4;
        return peterLockerSize;
    }
