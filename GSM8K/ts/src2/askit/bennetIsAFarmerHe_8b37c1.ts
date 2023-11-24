// Recompilation count: 0
export function bennetIsAFarmerHe_8b37c1({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Bennet is a farmer. He sells 'x1' of his eggplants for $3 each. He has 'x2' ears of corn that he can sell as well. If Bennet wants to make a total of $135, how much should he sell each ear of corn for?

        // Total eggplant's value = x1 * $3
        const eggplantValue = x1 * 3;

        // Money left to earn from corns = $135 - eggplant's value
        const amountLeft = 135 - eggplantValue;

        // The price for each ear of corn = money left / quantity of corns
        const cornPrice = amountLeft / x2;

        return cornPrice;
    }
