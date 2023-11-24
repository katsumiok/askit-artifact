// Recompilation count: 0
export function thereAre_9_300Pennies_2c3ab2({}: {}): number {
    // There are 9,300 pennies in a cup. What is the total dollar amount in a stack that contains two thirds of the pennies in the cup?
    let totalPennies = 9300 * (2 / 3);
    // To convert pennies into dollars we have to divide by 100
    let totalDollars = totalPennies / 100;
    
    return totalDollars;
}
