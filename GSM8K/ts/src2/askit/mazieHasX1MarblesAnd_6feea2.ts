// Recompilation count: 0
export function mazieHasX1MarblesAnd_6feea2({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Mazie has 'x1' marbles and gives them to twins, Dallas and Darla.  
    // If Dallas has a total of 'x2' marbles after dropping 'x3' of them in the playground, 
    // how many did Mazie give to Darla?
    let dallasOrigMarbles = x2 + x3; //The total number of marbles Dallas originally had before dropping 'x3' of them
    let darlaMarbles = x1 - dallasOrigMarbles; //The number of marbles Darla received from Mazie
    return darlaMarbles;
}
