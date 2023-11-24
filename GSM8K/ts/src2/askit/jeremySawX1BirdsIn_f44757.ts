// Recompilation count: 0
export function jeremySawX1BirdsIn_f44757({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Jeremy saw 'x1' birds in their backyard and threw a stone at them, scaring away 1/3 of that number. A few minutes later, 'x2' more birds joined the fearless birds. How many birds are now in the backyard?
    let remainingBirdsAfterScare = x1 - (x1 / 3);
    let totalBirds = remainingBirdsAfterScare + x2;
    return totalBirds;
}
