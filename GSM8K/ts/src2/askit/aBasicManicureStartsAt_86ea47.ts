// Recompilation count: 0
export function aBasicManicureStartsAt_86ea47({}: {}): number {
    const manicure = 35;
    const pedicure = 40;
    const nailArt = 3 * 10;  // $3 per nail, 10 nails (fingers)
    const discount = 0.2;  // 20% off

    const totalPriceForManicureAndPedicure = manicure + pedicure;
    const priceAfterDiscount = totalPriceForManicureAndPedicure * (1 - discount);

    const totalCost = priceAfterDiscount + nailArt;
    
    return totalCost;
}
