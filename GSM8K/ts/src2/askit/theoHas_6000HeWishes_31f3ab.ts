// Recompilation count: 0
export function theoHas_6000HeWishes_31f3ab({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // calculation for total cost of business suits and suitcases
    const suitCost = x1 * 100; 
    const suitcaseCost = x2 * 50; 

    // calculation for flight ticket
    const flightTicketCost = (x3 * 100) + 700; 

    // Theo's budget, he wishes to save $2000 for this trip
    const totalBudget = 6000;
    const savingGoal = 2000;

    // calculation for amount left for gifts after all costs and saving goal
    const amountForGifts = totalBudget - (suitCost + suitcaseCost + flightTicketCost + savingGoal);

    return amountForGifts;
}
