// Recompilation count: 0
export function duncanSAgeEightYears_374eec({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Duncan's age eight years ago was two times Adam's age four years ago. 
    // If Duncan's age is 'x1' now, how old will Adam be in 'x2' years?
    
    // Duncan's age eight years ago
    let duncanAgeEightYearsAgo = x1 - 8;

    // Adam's age four years ago was half of Duncan's age eight years ago
    let adamAgeFourYearsAgo = duncanAgeEightYearsAgo / 2;
    
    // Adam's current age
    let adamCurrentAge = adamAgeFourYearsAgo + 4;
    
    // Adam's age in 'x2' years
    let adamAgeInX2Years = adamCurrentAge + x2;

    return adamAgeInX2Years;
}
