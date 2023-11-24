// Recompilation count: 0
export function stevePutTogetherAPuzzle_5f474e({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Steve put together a puzzle that took 'x1' hours of hard work to complete. 
    // Anna put together the same puzzle in 'x2' hours more than half Steve's time. 
    // How long did it take Anna to finish the difficult puzzle?
    let halfOfStevesTime = x1 / 2;
    let annasTime = halfOfStevesTime + x2;
    return annasTime;
}
