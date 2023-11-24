// Recompilation count: 0
export function johnInjuredHisBackAnd_7ad9e8({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // John injured his back and needs to go to physical therapy.  He went to physical therapy for 'x1' weeks.  Each week he went twice for 'x2' hours at a time.  If the sessions cost $125 per hour how much did the physical therapy cost?
    let totalSessions = x1 * 2;    // Total number of sessions John went for
    let hoursPerSession = x2;      // Hours per session
    let costPerHour = 125;         // Cost per hour

    let totalCost = totalSessions * hoursPerSession * costPerHour;  // Total cost of the physical therapy 

    return totalCost;
}
