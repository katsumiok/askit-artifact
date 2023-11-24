// Recompilation count: 0
export function toRaiseMoneyForTheir_028637({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // To raise money for their class fund, each of the 'x1' students from one class sold lollipops that cost $0.8 per lollypop. On average, each student sold 'x2' lollipops. If they bought the lollipops for $0.5 each, how much money was the class able to raise from the profit of selling lollipops?

    let costPrice = 0.5;
    let sellingPrice = 0.8;
    let profitPerLollipop = sellingPrice - costPrice;
    let totalProfitPerStudent = profitPerLollipop * x2;
    let totalProfitClass = totalProfitPerStudent * x1;
    return totalProfitClass;
}
