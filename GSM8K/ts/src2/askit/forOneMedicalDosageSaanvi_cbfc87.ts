// Recompilation count: 0
export function forOneMedicalDosageSaanvi_cbfc87({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // For one medical dosage, Saanvi had to combine 'x1' mL of one medicine with 'x2' times that amount of the second medicine. How many mL of medicine would be in 'x3' doses?
    const oneDosage = x1 + x1 * x2;
    return oneDosage * x3;
}
