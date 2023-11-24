// Recompilation count: 0
export function thereAreX1FourthGraders_3ac81f({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Total boys are x1 (total fourth-graders) - x2 (total girls)
    let totalBoys = x1 - x2;
    // On Friday, the boys at school are total boys - boys absent
    let boysAtSchoolOnFriday = totalBoys - x4;
    return boysAtSchoolOnFriday;
}
