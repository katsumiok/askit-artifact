// Recompilation count: 0
export function jacksonIsPlantingTulipsHe_c8b017({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Jackson is planting tulips. He can fit 'x1' red tulips in a row and 'x2' blue tulips in a row. 
    // If Jackson buys 'x3' red tulips and 'x4' blue tulips, how many rows of flowers will he plant?

    // Calculate the number of rows for red tulips
    let redRows = Math.ceil(x3 / x1);

    // Calculate the number of rows for blue tulips
    let blueRows = Math.ceil(x4 / x2);

    // Return the total number of rows
    return redRows + blueRows;
}
