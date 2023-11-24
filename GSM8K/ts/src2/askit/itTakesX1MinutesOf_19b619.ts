// Recompilation count: 0
export function itTakesX1MinutesOf_19b619({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // It takes 'x1' minutes of walking to break in a new pair of shoes. 
    // Jason wants to try out for the track team in three weeks. 
    // If he can walk 'x2' days a week to break in the new shoes, 
    // how long does he have to spend walking each day?

    // In three weeks there are 3*7 = 21 days
    // Jason walks 'x2' days a week , so total walking days = 'x2' * 3
    let totalWalkingDays = x2 * 3;

    // Total minutes Jason needs to walk to break in the shoes = 'x1'
    // So, each day he needs to walk = 'x1' minutes / totalWalkingDays 

    return x1 / totalWalkingDays;
}
