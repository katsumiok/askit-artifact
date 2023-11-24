// Recompilation count: 0
export function theLlesisFamilyDroveAnd_aaa6c4({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // The Llesis family drove and hiked 'x1' hours to their vacation spot. 
    // They drove an average of 'x2' miles per hour and hiked an average of 'x3' miles per hour 
    // less than half their speed when they drive. 
    // If it took them 1.5 hours to hike, how far was their vacation spot?

    let drivingHours = x1 - 1.5;
    let drivingDistance = x2 * drivingHours;

    let hikingSpeed = (x2 / 2) - x3;
    let hikingDistance = hikingSpeed * 1.5;

    let totalDistance = drivingDistance + hikingDistance;

    return totalDistance;
 }
