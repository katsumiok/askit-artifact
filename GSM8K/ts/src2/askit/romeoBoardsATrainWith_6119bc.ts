// Recompilation count: 0
export function romeoBoardsATrainWith_6119bc({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Romeo boards a train with 'x1' people. At the first stop, 'x2' more people board the train. 
        // At the second stop, 'x3' people descended from the train while twice that number boarded the train. 
        // If 'x4' more people descended at the third station, calculate the total number of people on the train at the final stop.

        return x1 + x2 + (2 * x3) - x3 - x4;
    }
