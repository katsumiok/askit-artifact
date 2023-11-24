// Recompilation count: 0
export function juanAskedHisNeighborHerb_1a9e4d({}: {}): number {
    // Herb's house costs $76,000
    let herbHouseCost: number = 76000;
    
    // Juan's house is 30% less expensive than Herb's house
    let juanHouseCost: number = herbHouseCost - (herbHouseCost * 0.30);
    
    // value of the two houses combined
    let totalCost: number = herbHouseCost + juanHouseCost;

    return totalCost;
}
