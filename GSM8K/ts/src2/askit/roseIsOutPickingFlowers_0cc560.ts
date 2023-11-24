// Recompilation count: 0
export function roseIsOutPickingFlowers_0cc560({ x1, x2, x3, x4, x5, x6, x7, x8, x9 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
    x8: number;
    x9: number;
}): number {
    const total_x1_x2_petals = x1 * x2;
    const total_x3_x4_petals = x3 * x4;
    const total_x5_x6_petals = x5 * x6;
    const total_x7_x8_petals = x7 * x8;
    
    const total_petals_picked = total_x1_x2_petals + total_x3_x4_petals + total_x5_x6_petals + total_x7_x8_petals;
    
    const petals_lost = x9 * (x2 + x4 + x6 + x8);
    
    const total_petals_remaining = total_petals_picked - petals_lost;

    return total_petals_remaining;
}
