// Recompilation count: 0
export function thereAreX1CastlesIn_ae1ea1({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // There are 'x1' castles in Scotland. 'x2' percent of them are ruins.
    // Half of the ruined castles are unmanned. 
    // How many unmanned ruined castles are there in Scotland?
    const ruinedCastles = x1 * (x2 / 100); // calculate the ruined castles
    const unmannedRuinedCastles = ruinedCastles / 2; // calculate the unmanned ruined castles
    return unmannedRuinedCastles;
}
