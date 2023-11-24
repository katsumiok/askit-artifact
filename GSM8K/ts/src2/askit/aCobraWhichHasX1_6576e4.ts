// Recompilation count: 0
export function aCobraWhichHasX1_6576e4({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // A cobra, which has 'x1' spots, has twice as many spots as a mamba. 
        // If there are 'x2' cobras and 'x3' mambas in a snake park, what is half the number of spots they all have combined?
        let mambaSpots = x1 / 2; // As a cobra has twice the spots as a mamba, mamba has x1/2 spots
        let totalCobraSpots = x2 * x1; // Total cobra spots = number of cobras * spots per cobra 
        let totalMambaSpots = x3 * mambaSpots; // Total mamba spots = number of mambas * spots per mamba
        let halfTheTotalSpots = (totalCobraSpots + totalMambaSpots) / 2; // Half the total spots = (total cobra spots + total mamba spots) / 2
        return halfTheTotalSpots;
    }
