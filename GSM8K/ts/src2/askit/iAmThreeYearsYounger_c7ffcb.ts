// Recompilation count: 6
export function iAmThreeYearsYounger_c7ffcb({ x1 }: { x1: number; }): number {
    // Let's denote your age as x, your brother's age as y, and your sister's age as z, and your mom's age as m.
    // According to the problem, we have the following equations:
    // x = y - 3 (you are three years younger than your brother)
    // x = z + x1 (you are 'x1' years older than your sister)
    // m = 3*y - 1 (your mom's age is one less than three times your brother's age)
    // x + y + z + m = 87 (when you add all your ages, you get 87)
    
    // Solving these four equations, we get:
    // y = x + 3
    // z = x - x1
    // m = 3*(x + 3) - 1
    // x + x + 3 + x - x1 + 3x + 9 - 1 = 87
    // Simplify the equation:
    // 6x + 11 - x1 = 87
    // So, x = (87 - 11 + x1)/6
    
    return (87 - 11 + x1) / 6;
}
