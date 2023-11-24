// Recompilation count: 0
export function atTheEndOfThe_0426df({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculating the total number of crayon muffins by dividing total crayons by the number of small pieces per muffin
    let totalCrayons = x1 * x2;
    let totalMuffinCrayons = Math.floor(totalCrayons / x3);

    // Calculating total money by multiplying number of muffin crayons by the price per muffin
    let totalMoney = totalMuffinCrayons * 1.5;

    return totalMoney;
}
