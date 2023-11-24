// Recompilation count: 0
export function farmerBrownHasX1Animals_47b9f5({ x1 }: {
    x1: number;
}): number {
        // Farmer Brown has 'x1' animals on his farm, all either chickens or cows. He has twice as many chickens as cows. How many legs do the animals have, all together?
    
    // Since Farmer Brown has twice as many chickens as cows, we can divide the total number of animals by 3 to find the number of cows
    let cows = x1 / 3;

    // Once we know the number of cows, we can multiply it by 2 to find the number of chickens
    let chickens = cows * 2;

    // Chickens have 2 legs and cows have 4, so we can return the total number of legs
    return (cows * 4) + (chickens * 2);
}
