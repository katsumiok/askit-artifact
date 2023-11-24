// Recompilation count: 0
export function soloHasToReadX1_d85f0c({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // Total number of pages left to read from all textbooks
    let totalPages = x1 + x2 + x3 + x4 - x5;

    // Average number of pages Solo has to read in one day
    let avgPagesPerDay = totalPages / x6;
    
    return avgPagesPerDay;
}
