// Recompilation count: 0
export function johnGoesToTheMarket_ef3fef({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // John goes to the market and buys 'x1' goats for $500 each and 'x2' cows for $1500 each.  How much money did he spend?
        const goatPrice = 500;
        const cowPrice = 1500;

        let moneySpent = (x1 * goatPrice) + (x2 * cowPrice);
        
        return moneySpent;
    }
