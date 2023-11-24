// Recompilation count: 0
export function lukeAteX1HotDogs_3c46d4({ x1 }: {
    x1: number;
}): number {
        // Luke ate 'x1' hot dogs. Thomas ate three times more hot dogs than Luke. John ate half the amount Thomas ate. How many more hot dogs did John eat than Luke?
        let thomasHotDogs = x1 * 3;
        let johnHotDogs = thomasHotDogs / 2;

        return johnHotDogs - x1;
}
