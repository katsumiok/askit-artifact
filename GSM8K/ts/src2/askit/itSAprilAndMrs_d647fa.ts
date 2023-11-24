// Recompilation count: 0
export function itSAprilAndMrs_d647fa({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // It's April, and Mrs. Rylan has been busy on her farm planting different types of vegetables for the season. 
        // She has bought 'x1' packets of tomato seeds and 'x2' packets of celery seeds to plant. 
        // If a packet of tomato seeds costs $40 and a packet of celery seeds costs $30, how much money did she use to buy the seeds?
        
        const costOfTomatoSeeds = 40;
        const costOfCelerySeeds = 30;
        
        const totalCost = (x1 * costOfTomatoSeeds) + (x2 * costOfCelerySeeds);
        
        return totalCost;
    }
