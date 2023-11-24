// Recompilation count: 1
export function jameWillTurnX1In_8abdf2({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Jame will turn 'x1' in 'x2' years.  In 'x3' years his cousin will be 'x4' years younger than twice his age.  How many years separate the age of the two now?
    let jameCurrentAge = x1 - x2;
    let jameAgeInX3 = jameCurrentAge + x3;
    let cousinAgeInX3 = 2 * jameAgeInX3 - x4;
    let cousinCurrentAge = cousinAgeInX3 - x3; // subtracting x3 years to get current cousin's age
    let ageDifference = Math.abs(jameCurrentAge - cousinCurrentAge);
    return ageDifference;
}
