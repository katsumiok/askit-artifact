// Recompilation count: 0
export function aLocalGasStationIs_b06d24({ x1 }: {
    x1: number;
}): number {
        // A local gas station is selling gas for $3.00 a gallon.  An app company is offering $.20 cashback per gallon if you fill up at this station.  If someone buys 'x1' gallons of gas, how much with their gas be, after the cashback rewards?
    let totalCostWithoutDiscount = x1 * 3; // the gas price is $3.00 per gallon
    let cashback = x1 * 0.20; // the cashback is $.20 per gallon
    let finalCost = totalCostWithoutDiscount - cashback; //subtract cashback from total
    return finalCost;
    }
