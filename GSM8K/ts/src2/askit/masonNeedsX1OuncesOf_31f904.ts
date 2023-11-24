// Recompilation count: 0
export function masonNeedsX1OuncesOf_31f904({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Mason needs 'x1' ounces of sugar to make a batch of suckers and 'x2' ounces of sugar to make a batch of fudge. 
        // How much sugar does he need to make 'x3' batches of suckers and 'x4' batch of fudge?
    let sugarForSuckers = x1 * x3;
    let sugarForFudge = x2 * x4;
    return sugarForSuckers + sugarForFudge;
}
