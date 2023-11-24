// Recompilation count: 0
export function tomBoughtACdFor_08af92({}: {}): number {
        // Tom bought a CD for $4, and a headphone set. In total, he paid $48. How many more CDs would Tom have been able to buy if he had decided not to buy the headphone set?
        
        const cdCost: number = 4;
        const totalCost: number = 48;
        const headphoneSetCost: number = totalCost - cdCost;

        return Math.floor(headphoneSetCost / cdCost);
}
