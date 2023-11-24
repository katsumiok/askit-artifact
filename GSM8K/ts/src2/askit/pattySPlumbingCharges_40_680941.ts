// Recompilation count: 1
export function pattySPlumbingCharges_40_680941({}: {}): number {
    // Patty's Plumbing charges $40 to visit a house to make a repair, 
    // plus $35 per hour, or part thereof, for labor, plus parts. 
    // One job took 2.25 hours and used $60 in parts. How much did Patty charge?

    const visitCharge = 40;
    const laborRatePerHour = 35;
    const hoursWorked = 2.25;
    const costOfParts = 60;

    // calculate charge for labor, rounding up to the next whole number
    // We are using Math.ceil function to get the hours or part thereof
    const laborCharge = laborRatePerHour * Math.ceil(hoursWorked);
    
    // the total charge is the sum of the visit charge, labor, and parts cost
    const totalCharge = visitCharge + laborCharge + costOfParts;

    return totalCharge;
}
