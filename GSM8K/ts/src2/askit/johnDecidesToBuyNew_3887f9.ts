// Recompilation count: 0
export function johnDecidesToBuyNew_3887f9({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Phone price is given as $600
    const phonePrice = 600;
    
    // Total people who need phone is John, his 'x1' kids and his wife. So total count is x1+2
    const totalCount = x1 + 2;

    // If total count is less or equal to the first 'x2' phones, he pays full price for all
    if(totalCount <= x2) return totalCount * phonePrice;

    // otherwise, first 'x2' are full price, and the rest are half price
    const fullPricePhones = x2;
    const halfPricePhones = totalCount - x2;
    return fullPricePhones * phonePrice + halfPricePhones * phonePrice / 2;
}
