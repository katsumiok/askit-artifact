// Recompilation count: 0
export function nissaHiresX1SeasonalWorkers_031782({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    let elvesLeftAfterVomitRound = x1 - x1 / 3; // After a third of the elves quit
    let elvesLeftAfterKickRound = elvesLeftAfterVomitRound - x2; // After 'x2' more quit
    return elvesLeftAfterKickRound;
}
