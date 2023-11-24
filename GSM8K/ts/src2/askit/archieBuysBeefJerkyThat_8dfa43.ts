// Recompilation count: 0
export function archieBuysBeefJerkyThat_8dfa43({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Archie buys beef jerky that comes 'x1' sticks to a bag and costs $18.00 per bag.  
        // If Archie buys 'x2' bag while they're $3.00 off a bag, 
        // how much will each stick of jerky cost in cents?
        
        let costPerBag = 18.00; // original cost per bag in dollars
        let discountPerBag = 3.00; // discount per bag in dollars
        
        // calculate total expense in dollars
        let totalExpense = (costPerBag - discountPerBag) * x2;
        
        // convert total expense to cents
        totalExpense = totalExpense * 100;

        // calculate the cost per stick in cents
        let costPerStick = totalExpense / (x1 * x2);

        return costPerStick;
}
