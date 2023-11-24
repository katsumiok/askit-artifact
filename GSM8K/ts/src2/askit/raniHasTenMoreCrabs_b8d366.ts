// Recompilation count: 0
export function raniHasTenMoreCrabs_b8d366({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Rani has ten more crabs than Monic, who has 'x1' fewer crabs than Bo. If Bo has 'x2' crabs, calculate the total number of crabs the three have together.
    const boCrabs = x2;
    const monicCrabs = boCrabs - x1;
    const raniCrabs = monicCrabs + 10;
    
    return boCrabs + monicCrabs + raniCrabs;
}
