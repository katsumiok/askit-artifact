// Recompilation count: 0
export function juanWantsToAddCroissants_8916a2({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Calculation: croissants per week = x2 dozen a day * 7 days
        // Butter per week = croissants per week * (1/4) pound butter per dozen
    let croissantsPerWeek = x2 * 7;
    let butterNeeded = croissantsPerWeek * (x1 * (1/4));
    return butterNeeded;
}
