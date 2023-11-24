// Recompilation count: 0
export function thereAreX1PupilsIn_d67a82({ x1 }: {
    x1: number;
}): number {
    // There are 'x1' pupils in a class. Half of the class likes blue. One-fourth of the remaining likes green and the rest likes yellow. How many pupils like the color yellow?
    const halfClass = x1 / 2;
    const blueLike = halfClass;
    const remaining = x1 - blueLike;
    const greenLike = remaining / 4;
    const yellowLike = remaining - greenLike;
    return yellowLike;
}
