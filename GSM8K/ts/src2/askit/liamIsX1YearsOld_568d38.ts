// Recompilation count: 0
export function liamIsX1YearsOld_568d38({ x1 }: {
    x1: number;
}): number {
        // Liam is 'x1' years old now. Two years ago, Liam’s age was twice the age of Vince. How old is Vince now?
    let liamAgeTwoYearsAgo = x1 - 2;  // Two years ago, Liam's age was
    let vinceAgeTwoYearsAgo = liamAgeTwoYearsAgo / 2;  // Two years ago, Vince's age was half of Liam's age
    let vinceAgeNow = vinceAgeTwoYearsAgo + 2;  // Vince's current age will be his age two years ago plus two years
    return vinceAgeNow;
} 
