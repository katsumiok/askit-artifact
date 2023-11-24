// Recompilation count: 0
export function coloradoCityUses_40Of_c2b9a0({}: {}): number {
    // Define the percentages
    const totalWaterUsed = 0.40; // Colorado City uses 40% of the water 
    const industrialWaterUsed = 0.80; // 80% of that water is used for industrial purposes 

    // Calculate the percentage of the water used by the city for non-industrial purposes
    const nonIndustrialWaterUsed = totalWaterUsed * (1 - industrialWaterUsed);

    return nonIndustrialWaterUsed * 100; // returning the result in percentages
}
