// Recompilation count: 1
export function aHerdConsistsOfCamels_ee171a({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A herd consists of camels and dromedaries. There are 'x1' heads and 'x2' bumps. How many dromedaries are there if camels have two humps each and dromedaries have one hump each?
    // The number of camel humps (2 humps per camel) is equal to total humps minus the total number of heads (since every animal has at least one hump).
    const camels = x2 - x1;
    // The dromedaries are then the remaining heads once the camels have been accounted for.
    const dromedaries = x1 - camels;
    return dromedaries;
}
