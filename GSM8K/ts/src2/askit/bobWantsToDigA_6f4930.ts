// Recompilation count: 0
export function bobWantsToDigA_6f4930({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Bob wants to dig a hole 'x1' feet long by 'x2' feet wide by 'x3' feet deep. 
        // If it takes him 'x4' seconds to shovel a cubic foot of earth, 
        // how long will it take him to dig the hole?
        let volume = x1 * x2 * x3; // Calculate the volume of the hole
        let timeRequired = volume * x4; // Time required is the multiplication of the volume and the time it takes to shovel a cubic foot
        return timeRequired;
}
