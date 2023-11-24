// Recompilation count: 0
export function mrSmithHasTwoFarms_456189({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Mr. Smith has two farms, Farm X and Farm Y. He has 'x1' goats in Farm X and 'x2' goats in Farm Y. He sold 'x3' goats from Farm X and twice as many goats from Farm Y. How many goats are left in the two farms altogether?
    
    const totalGoatsBeforeSale = x1 + x2;
    const goatsSoldFromFarmY = 2 * x3;
    
    const totalGoatsAfterSale = totalGoatsBeforeSale - x3 - goatsSoldFromFarmY;

    return totalGoatsAfterSale;
}
