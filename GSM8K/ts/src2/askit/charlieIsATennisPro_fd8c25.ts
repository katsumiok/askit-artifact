// Recompilation count: 1
export function charlieIsATennisPro_fd8c25({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Charlie is a tennis pro.  He spends most of the day teaching others lessons on how to improve their game.  His standard fee is $80 per hour for lessons, but he reduces his rate by 25% when he is giving lessons to a veteran.   
        
        let standardFee = 80;
        let reducedFee = standardFee * (1 - 0.25); // 75% of standard rate
        
        let totalAmount = (x1 * standardFee) + (x2 * reducedFee);
        
        return totalAmount; // Total amount of money Charlie will make for the day
    }
