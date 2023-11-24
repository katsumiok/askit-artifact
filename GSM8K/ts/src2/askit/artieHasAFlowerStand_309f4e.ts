// Recompilation count: 0
export function artieHasAFlowerStand_309f4e({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // price per pot
    const marigoldsPrice: number = 2.74;
    const petuniasPrice: number = 1.87;
    const begoniasPrice: number = 2.12;

    // round to nearest dollar
    const roundedMarigoldsPrice: number = Math.round(marigoldsPrice);
    const roundedPetuniasPrice: number = Math.round(petuniasPrice);
    const roundedBegoniasPrice: number = Math.round(begoniasPrice);

    // Calculate final total for each flower type
    const totalMarigolds: number = x1 * roundedMarigoldsPrice;
    const totalPetunias: number = x2 * roundedPetuniasPrice;
    const totalBegonias: number = x3 * roundedBegoniasPrice;

    // sum up totals
    return totalMarigolds + totalPetunias + totalBegonias;
}
