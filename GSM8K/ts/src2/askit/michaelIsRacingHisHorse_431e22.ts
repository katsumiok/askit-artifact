// Recompilation count: 0
export function michaelIsRacingHisHorse_431e22({ x1, x2 }: {
    x1: number;
    x2: number;
}): number { 
    // First, we need to calculate the total distance the horse runs
    let hours = x1 / 60; // Convert minutes to hours
    let miles = hours * 32; // Calculate the miles run
    
    // Now we need to figure out how many bails of hay the horse eats
    let bails = miles / 2; // The horse eats 1/2 a bail per mile
    
    // Next, calculate the total cost of the hay
    let cost = bails * 3; // Each bail costs $3

    // Finally, calculate the change that Michael has left
    let totalMoney = x2 * 6; // Michael has six, 'x2' dollar bills
    let change = totalMoney - cost;

    return change;
}
