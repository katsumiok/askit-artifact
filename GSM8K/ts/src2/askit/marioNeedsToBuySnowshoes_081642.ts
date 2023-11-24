// Recompilation count: 0
export function marioNeedsToBuySnowshoes_081642({ x1 }: {
    x1: number;
}): number {
        // Mario needs to buy snowshoes for his 'x1' sled dogs. 
        // Assuming his dogs each has four legs and each pair of snowshoes costs $12.00, 
        // how much will it cost him to buy snowshoes for all of his dogs?
        
        // As each dog has 4 legs, total legs for 'x1' number of dogs would be x1 * 4
        let totalLegs = x1 * 4;
        
        // Each pair of snowshoes can be used on two legs, hence for totalLegs number of legs total snowshoes needed would be totalLegs/2
        let totalSnowshoes = totalLegs / 2;
        
        // Each snowshoe pair costs $12, hence total cost would be totalSnowshoes * 12
        let totalCost = totalSnowshoes * 12;
        
        return totalCost;
    }
