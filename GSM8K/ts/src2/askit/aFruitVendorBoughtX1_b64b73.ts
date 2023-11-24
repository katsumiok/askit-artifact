// Recompilation count: 0
export function aFruitVendorBoughtX1_b64b73({ x1 }: {
    x1: number;
}): number {
        // A fruit vendor bought 'x1' watermelons for $80. He sold all of them at a profit of 25%. How much was each watermelon sold?
        let costPrice: number = 80;
        let profitPercent: number = 25;
        let salePrice: number = costPrice * (1 + profitPercent / 100);
        let pricePerWatermelon: number = salePrice / x1;
        return pricePerWatermelon;
    }
