// Recompilation count: 0
export function aTreasureHunterFoundA_b45953({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A treasure hunter found a buried treasure chest filled with gems. There were 'x1' diamonds, 'x2' fewer rubies than diamonds, and twice the number of emeralds than the rubies.   How many of the gems were there in the chest?
    
    let diamonds = x1;
    let rubies = diamonds - x2;
    let emeralds = rubies * 2;
    
    return diamonds + rubies + emeralds;
}
