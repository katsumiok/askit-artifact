// Recompilation count: 0
export function janethBorrowed_2000AndPromised_74a5c2({ x1 }: {
    x1: number;
}): number {
        // Janeth borrowed $2000 and promised to return it with an additional 10% of the amount. If she is going to pay $165 a month for 'x1' months, how much will be Janeth's remaining balance by then?
        const totalAmountToPay = 2000 + (2000 * 0.1);
        const payedSoFar = 165 * x1;

        const remainingBalance = totalAmountToPay - payedSoFar;

        return remainingBalance;
    }
