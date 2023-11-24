// Recompilation count: 0
export function annabelleIsSavingForA_2eca54({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Calculate total earnings from both jobs
    let totalEarnings = (x1 * 10) + (x2 * 5);

    // Annabelle's current savings plus her earnings
    let savingsAfterEarnings = 80 + totalEarnings;

    // subtract her current savings from the cost of the phone
    let amountToSave = 400 - savingsAfterEarnings;

    // return the amount she still needs to save
    return amountToSave > 0 ? amountToSave : 0;
}
