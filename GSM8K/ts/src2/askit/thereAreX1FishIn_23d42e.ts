// Recompilation count: 0
export function thereAreX1FishIn_23d42e({ x1 }: {
    x1: number;
}): number {
        // There are 'x1' fish in the fish tank. One-third of the fish have red stripes, and 5/11 of the remaining fish have blue stripes. Altogether, how many fish have red stripes and blue stripes?
    
    const redStripes = x1 / 3;
    const remainingFish = x1 - redStripes;
    const blueStripes = (5/11) * remainingFish;
    
    return redStripes + blueStripes;
}
