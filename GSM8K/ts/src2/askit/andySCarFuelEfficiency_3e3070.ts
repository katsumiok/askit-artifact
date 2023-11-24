// Recompilation count: 0
export function andySCarFuelEfficiency_3e3070({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Andy's car fuel efficiency is 'x1' MPG (miles per gallon). If the current price for regular gas is $3/gallon, how much money is Andy's car consuming per week if he only uses his car to go to work from Monday to Friday and the one-way distance between his home and office is 'x2' miles?
    
    // Calculate total miles traveling for a week, considering round trip per day
    const totalMiles = x2 * 2 * 5;

    // Calculate total gallon fuel consumed per week
    let totalGallons = totalMiles / x1;

    // Calculate total fuel consumption cost
    let totalCost = totalGallons * 3;

    return totalCost;
}
