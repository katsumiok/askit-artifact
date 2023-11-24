// Recompilation count: 0
export function robertIsBuildingAX1_d4e1b1({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Robert is building a 'x1' foot long, 'x2' foot wide, rectangular wooden fence around his garden.  He needs 'x3' wood slats for every foot of fencing he builds.  How many wooden slats will he need?
    const perimeter = 2 * (x1 + x2); // Formula for Rectangle Perimeter: 2*(length+breadth)
    return perimeter * x3; // Number of slats needed is the perimeter times the number of slats per foot
}
