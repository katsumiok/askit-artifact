// Recompilation count: 0
export function tomSShipCanTravel_4cde53({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Asuming x2 and x3 are hours in 24-hour format
    // distance to go = speed * time
    let distance = x1 * (x3 - x2);

    // time to come back = distance / speed
    let timeToComeBack = distance / x4;

    // return the time to come back in hours
    return timeToComeBack;
}
