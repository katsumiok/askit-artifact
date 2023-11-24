// Recompilation count: 0
export function everyHourPaigeCanBake_c86281({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // baking hours from 1:00 PM to 6:00 PM are 5 hours
    let bakingHours: number = 5;
    
    // Every hour she bakes 'x1' loaves, so total loaves baked = bakingHours * x1
    let totalLoaves: number = bakingHours * x1;
    
    // Each loaf is cut into 'x2' slices, so total slices = totalLoaves * x2
    let totalSlices: number = totalLoaves * x2;
    
    // Each slice is sold for 'x3' cents, so total cents = totalSlices * x3
    let totalCents: number = totalSlices * x3;
    
    // Convert cents to dollars and return
    // 1 dollar is 100 cents, so total dollars = totalCents / 100
    let totalDollars: number = totalCents / 100;
    
    return totalDollars;
}
