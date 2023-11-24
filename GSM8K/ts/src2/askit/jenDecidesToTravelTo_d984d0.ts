// Recompilation count: 3
export function jenDecidesToTravelTo_d984d0({ x1 }: {
    x1: number;
}): number {
    // The cost of the supplies
    let costOfSupplies = 400;
    
    // The tickets for travel cost, in total, 50% more than the supplies
    let costOfTickets = costOfSupplies * 1.5;
    
    // Calculate the total cost
    let travelCost = costOfSupplies + costOfTickets;
    
    return travelCost;
}
