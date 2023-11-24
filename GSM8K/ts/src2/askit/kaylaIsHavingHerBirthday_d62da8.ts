// Recompilation count: 0
export function kaylaIsHavingHerBirthday_d62da8({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Calculate the total attendees
    let totalAttendees = x1 + x2 + x3 - x4;

    // Cost for the first 20 attendees
    let baseCost = 125;
    let additionalCost = 0;

    if (totalAttendees > 20) {
        additionalCost = (totalAttendees - 20) * 6;
    }

    // total cost 
    let totalCost = baseCost + additionalCost;

    return totalCost;
}
