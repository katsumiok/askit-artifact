// Recompilation count: 0
export function thereIsSpaceForX1_6c1c4b({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // There is space for 'x1' pencils in the box. If there are 'x2' pencils missing from the box, how many pairs of pencils are in the box?
    return (x1 - x2) / 2;
}
