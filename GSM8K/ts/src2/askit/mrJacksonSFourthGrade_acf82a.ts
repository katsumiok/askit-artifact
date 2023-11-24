// Recompilation count: 9
export function mrJacksonSFourthGrade_acf82a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculate total of glue sticks he wants to give each student
    const totalGlueSticks = x1 * x2;

    // Calculate how many packs he needs
    let totalPacks = totalGlueSticks / 8;

    // Mr. Jackson can only buy whole packs, hence if there's a fraction, he should buy an extra pack
    if(totalPacks % 1 !== 0){
        totalPacks = Math.floor(totalPacks) + 1;
    }

    // Return the result
    return totalPacks;
}
