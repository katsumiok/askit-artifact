// Recompilation count: 0
export function markBuysAFleetOf_dd78f6({ x1 }: {
    x1: number;
}): number {
        // Mark buys a fleet of 'x1' cars for his company.  Each car sells for $20,000.  He pays 10% tax on the cars and then another $1000 for registration on each of them.  How much does he pay for everything?
        const carPrice = 20000;
        const taxRate = 0.10;
        const regFeePerCar = 1000;

        const totalPrice = x1 * carPrice;
        const totalTax = totalPrice * taxRate;
        const totalRegFee = x1 * regFeePerCar;

        return totalPrice + totalTax + totalRegFee;
    }
