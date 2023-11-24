// Recompilation count: 0
export function nineOfTheKidsIn_4bd13b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Nine of the kids in Gina's class are allergic to dairy, 'x1' are allergic to peanuts and 'x2' are allergic to both. If there are 'x3' kids in her class, how many aren't allergic to anything?
    
    const kids_allergic_to_dairy = 9;
    const kids_allergic_to_peanuts = x1;
    const kids_allergic_to_both = x2;
    
    // Subtract the number of allergic kids from the total kids
    // But add the number of kids allergic to both (as they were subtracted twice)
    const kids_with_no_allergies = x3 - (kids_allergic_to_dairy + kids_allergic_to_peanuts - kids_allergic_to_both);

    return kids_with_no_allergies;
}
