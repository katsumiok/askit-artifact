// Recompilation count: 0
export function justinHasAJarWith_383628({ x1, x2, x3, x4 }: {
    x1: number; // quarters
    x2: number; // dimes
    x3: number; // nickels
    x4: number; // pennies
}): number {
    // Define the dollar values of the coins
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;
    
    // Justin has a jar with many coins in it. 
    // The jar has 'x1' quarters, 'x2' dimes, 'x3' nickels, and 'x4' pennies. 
    // What is the total dollar amount in the jar?
    const total = (x1 * quarterValue) + (x2 * dimeValue) + (x3 * nickelValue) + (x4 * pennyValue);
    
    return total;
}
