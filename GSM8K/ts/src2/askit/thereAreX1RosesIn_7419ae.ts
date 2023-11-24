// Recompilation count: 0
export function thereAreX1RosesIn_7419ae({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // There are 'x1' roses in the vase. There are 'x2' more dahlias than roses in the vase. How many flowers are there in the vase in total?
    let roses: number = x1;
    let dahlias: number = x1 + x2;
    let totalFlowers: number = roses + dahlias;

    return totalFlowers;
}
