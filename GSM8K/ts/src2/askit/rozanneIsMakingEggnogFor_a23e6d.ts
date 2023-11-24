// Recompilation count: 0
export function rozanneIsMakingEggnogFor_a23e6d({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        let totalEggs = (x1 * 12) + x2; // Convert dozens of eggs to single eggs and add x2
        let totalGlasses = Math.floor(totalEggs / x4); // Calculate total glasses that can be made from the total eggs
        let totalTrays = Math.floor(totalGlasses / x3); // Calculate total trays that can be filled with the glasses

        return totalTrays; // Return the number of trays
    }
