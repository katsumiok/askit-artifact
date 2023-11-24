// Recompilation count: 0
export function johnHasX1HectaresOf_e6adb1({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // John has 'x1' hectares of a pineapple field. There are 'x2' pineapples per hectare. John can harvest his pineapples every 'x3' months. How many pineapples can John harvest within a year?
    let harvestsPerYear = Math.floor(12 / x3);
    return x1 * x2 * harvestsPerYear;
}
