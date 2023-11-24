// Recompilation count: 0
export function billStartsOnThe_3rd_d19bd8({ x1 }: {
    x1: number;
}): number {
        // Bill starts on the 3rd floor. He rides the elevator up to the floor that's equal to 'x1' times his starting floor plus 6. What floor is Bill on now?
        const startingFloor: number = 3;
        const finalFloor: number = x1 * startingFloor + 6;
        return finalFloor;
    }
