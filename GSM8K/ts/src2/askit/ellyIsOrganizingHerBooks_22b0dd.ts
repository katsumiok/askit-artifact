// Recompilation count: 0
export function ellyIsOrganizingHerBooks_22b0dd({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {

    // Each of the middle 'x1' shelves can hold 'x2' books
    let middleShelfCapacity = x1 * x2;

    // The bottom shelf can hold twice as many books as a middle shelf
    let bottomShelfCapacity = 2 * x2;

    // The top shelf can hold 'x3' fewer books than the bottom shelf
    let topShelfCapacity = bottomShelfCapacity - x3;

    // Total capacity of a single bookcase
    let singleBookcaseCapacity = middleShelfCapacity + bottomShelfCapacity + topShelfCapacity;

    // If she has 'x4' books, how many bookcases does she need to hold all of them?
    let totalBookcasesNeeded = Math.ceil(x4 / singleBookcaseCapacity);

    return totalBookcasesNeeded;
}
