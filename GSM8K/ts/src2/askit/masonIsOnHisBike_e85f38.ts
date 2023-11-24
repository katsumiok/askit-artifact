// Recompilation count: 0
export function masonIsOnHisBike_e85f38({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Mason is on his bike journey at a rate of 'x1' miles per hour. He travels for 'x2' hours, takes some rest, and then goes on for another 'x3' hours. How many miles has he traveled in total?
    let part1Dist = x1 * x2; // distance covered in part 1 of the journey
    let part2Dist = x1 * x3; // distance covered in part 2 of the journey

    return part1Dist + part2Dist; // total distance covered
}
