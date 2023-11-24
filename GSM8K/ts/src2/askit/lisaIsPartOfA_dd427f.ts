// Recompilation count: 0
export function lisaIsPartOfA_dd427f({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // The choir that Lisa is part of has 'x1' members, 50% of which are boys and 50% of which are girls.  
    let girlsInChoir = x1 / 2;
    
    // On the day of the performance, however, half the people performing can't make it to the show because their bus breaks down.
    let girlsWhoMadeIt = girlsInChoir / 2;

    // The choir's 'x2' teachers then decide to sing with them.
    let totalPerformers = girlsWhoMadeIt + x2;

    // Return the total number of people who sang in the performance
    return totalPerformers;
}
