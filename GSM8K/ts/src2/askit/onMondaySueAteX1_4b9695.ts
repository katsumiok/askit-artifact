// Recompilation count: 0
export function onMondaySueAteX1_4b9695({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Calculate calories consumed by Sue's sister
    let sisterCalories = (x2 + x3) * x5;
    
    // Calculate calories consumed by Sue
    let sueCalories = ((x1 * x2) + (2 * x3)) * x5;
    
    // Return the difference in calories consumed
    return sueCalories - sisterCalories;
}
