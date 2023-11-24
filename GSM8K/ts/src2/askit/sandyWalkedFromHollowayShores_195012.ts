// Recompilation count: 0
export function sandyWalkedFromHollowayShores_195012({ x1 }: {
    x1: number;
}): number {
    // Sandy walked from Holloway Shores to Sun Valley Shores for 'x1' hours on a particular day. 
    // She also walked half as many hours on the second day as she walked on the first day, to Hollock valley shores.
    // We need to calculate the total time Sandy took to walk in the two days in minutes.
    
    let totalHours = x1 + (x1 / 2); // Total hours of the two days
    let totalMinutes = totalHours * 60; // Convert hours to minutes
    return totalMinutes;
} 
