// Recompilation count: 0
export function hunterCountedX1CarsPacked_315d64({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Hunter counted 'x1' cars packed in their school parking lot when entering class one morning. During the first break, he counted 'x2' more cars in the parking lot. When he got out of class for the lunch break, he realized that 1/2 the number of cars in the parking lot had gone. What's the total number of cars he counted during lunch break?
        let totalCarsBeforeLunch = x1 + x2;
        let carsDuringLunch = totalCarsBeforeLunch / 2;
        return carsDuringLunch;
    }
