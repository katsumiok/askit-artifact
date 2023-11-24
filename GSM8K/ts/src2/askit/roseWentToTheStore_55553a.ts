// Recompilation count: 0
export function roseWentToTheStore_55553a({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Monday's cakes count
    let mondayCakes = x1;

    // Tuesday she bought three times that number of cakes
    let tuesdayCakes = 3 * x1;

    // On Wednesday she bought 'x2' times the number of cakes she did on Tuesday
    let wednesdayCakes = x2 * tuesdayCakes;

    // total number of cakes bought after all three days
    let totalCakes = mondayCakes + tuesdayCakes + wednesdayCakes;

    return totalCakes;
}
