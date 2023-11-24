// Recompilation count: 0
export function garyLikesToWalkAround_9e1c4e({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Gary likes to walk around the edge of the local park, which is a rectangle that measures 1.5 miles by 'x1' miles. If he walks at 'x2' miles/hour, how many hours does he spend walking?
    // Calculate the perimeter of the park
    const perimeter = 2 * (1.5 + x1);
    // Calculate how many hours Gary spends walking
    const hours = perimeter / x2;
    return hours;
}
