// Recompilation count: 3
export function johnBringsHisDogTo_f9b31c({ x1 }: {
    x1: number;
}): number {
    // Calculate the cost of the vaccines
    let vaccineCost = x1 * 20;

    // Calculate the total cost including the heartworm check
    let totalCost = vaccineCost / 0.40;

    // Calculate the amount of money John leaves with
    let remainingMoney = 125 - totalCost;

    // Return the remaining money
    return remainingMoney;
}
