// Recompilation count: 4
export function inX1YearsMelanieWill_4628c2({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // In 'x1' years, Melanie will be 'x2' years old. 
    // In how many years will her age be thrice her present age?
    
    // Melanie's present age is x2 - x1
    const presentAge = x2 - x1;
    
    // Melanie's age will be thrice her present age in (3*presentAge) - presentAge years
    return (3 * presentAge) - presentAge;
}
