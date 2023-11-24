// Recompilation count: 0
export function jimHasAX1Pack_cc46c0({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // First, we calculate how many pieces of gum Jim chews at school
    const gumAtSchool = (x4 / x3) * x2;
    // Total gum chewed is gum at school, gum on the way home and gum after dinner
    const totalGumsChewed = gumAtSchool + x5 + x6;
    // After chewing, this is what Jim has left
    let remainingGum = x1 - totalGumsChewed;
    // Check if number is negative (if Jim chews more gum than he has)
    remainingGum = remainingGum < 0 ? 0 : remainingGum;
    // Half of the remaining gum is given to his sister
    remainingGum /= 2;
    // Round down to the nearest whole number, because we can't have a piece of a piece of gum
    return Math.floor(remainingGum);
}
