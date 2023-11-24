// Recompilation count: 0
export function suzieLovesToChewFruit_2c5dcc({}: {}): number {
        // calculate the cost of each pack of strawberry gum
        let totalCost: number = 7;
        let grapeCost: number = 2;
        let greenAppleCost: number = grapeCost / 2;
        let strawberryPacksCount: number = 2;
        
        let strawberryPackCost: number = (totalCost - grapeCost - greenAppleCost) / strawberryPacksCount;
        return strawberryPackCost;
    }
