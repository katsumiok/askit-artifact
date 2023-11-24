// Recompilation count: 0
export function matthewHasACollectionOf_3e2434({ x1 }: { x1: number; }): number {
        // Matthew has a collection of 'x1' unique toy soldiers. 
        // He wants to sell them for a fair price. 
        // He found a buyer who is willing to pay for half his collection $5 per toy, 
        // and for the other half $7 per toy. If Matthew would agree to that offer, 
        // how much money would he earn?

        let halfCollectionCount = x1 / 2;
        let earnedMoney = halfCollectionCount * 5 + halfCollectionCount * 7;
        return earnedMoney;
    }

