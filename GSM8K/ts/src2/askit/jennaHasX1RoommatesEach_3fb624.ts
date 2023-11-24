// Recompilation count: 1
export function jennaHasX1RoommatesEach_3fb624({ x1 }: {
    x1: number;
}): number {
    // Jenna has 'x1' roommates. Each month the electricity bill is $100. 
    // How much will each roommate pay per year for electricity, if they divide the share equally?
    let monthlyBill = 100; // $100 per month
    let monthsPerYear = 12; // 12 months in a year

    // Calculate total cost per year
    let totalYearlyCost = monthlyBill * monthsPerYear;
    
    // Divide total cost by the number of roommates
    let costPerRoommate = totalYearlyCost / (x1 + 1); // include Jenna in the count

    return costPerRoommate;
}
