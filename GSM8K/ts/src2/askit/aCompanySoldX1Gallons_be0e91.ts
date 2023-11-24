// Recompilation count: 0
export function aCompanySoldX1Gallons_be0e91({ x1 }: {
    x1: number;
}): number {
    // A company sold 'x1' gallons of milk in jars to Mr. Marcellus' store at the cost of $3.5 per gallon. However, Mr. Marcellus later realized 2/5 of the amount of milk he purchased had passed the expiry date and could not be sold. He returned the sour milk to the company and ordered a refund. Calculate how much he got in refunds.
    const expiredMilkAmount: number = x1 * (2 / 5);
    const costPerGallon: number = 3.5;
    const refund: number = expiredMilkAmount * costPerGallon;
    return refund;
}
