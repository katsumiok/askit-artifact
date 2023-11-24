// Recompilation count: 0
export function johnPlansToSellAll_22ed00({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // John plans to sell all his toys and use the money to buy video games. He has 'x1' lego sets and he sells them for $15 each. He ends up buying 'x2' video games for $20 each and has $5 left. How many lego sets does he still have?
        let moneyFromLego = x1 * 15; 
        let spentOnGames = x2 * 20;
        let remainingMoney = moneyFromLego - spentOnGames - 5; // 5$ left
        let remainingLego = remainingMoney / 15;
        return remainingLego;
    }
