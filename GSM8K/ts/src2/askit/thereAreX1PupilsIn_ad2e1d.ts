// Recompilation count: 0
export function thereAreX1PupilsIn_ad2e1d({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // There are 'x1' pupils in a class. The teacher has 'x2' coupons; each coupon can be redeemed for 'x3' bottles of apple juice. The teacher gives each student 'x4' bottles of apple juice to drink for lunch. After redeeming all her coupons and giving each student their apple juice lunch, how many bottles of apple juice does the teacher have for herself?
    
    // Total bottles after redeeming coupons
    const totalBottlesOfJuice = x2 * x3;
    
    // Total bottles given to students
    const bottlesGivenToStudents = x1 * x4;
    
    // Bottles left after giving students
    const bottlesLeftForTeacher = totalBottlesOfJuice - bottlesGivenToStudents;
    
    return bottlesLeftForTeacher;
}
