// Recompilation count: 0
export function farmerBrownSFarmIs_c39ceb({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Farmer Brown's farm is 'x1' acres, and Farmer Smith's farm is 'x2' acres more than twice that. How many acres do the two farms have, together?
        let farmerBrown = x1;
        let farmerSmith = 2 * x1 + x2;
        return farmerBrown + farmerSmith;
    }
