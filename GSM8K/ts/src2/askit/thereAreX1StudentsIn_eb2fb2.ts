// Recompilation count: 0
export function thereAreX1StudentsIn_eb2fb2({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // There are 'x1' students in Marissa’s class.
        // Each student started the year with 'x2' pencils.
        // After two months, 1/5 of the total pencils in class were used.
        // At the end of the year, only 1/3 of the remaining pencils were left.
        // How many pencils were left?

        const totalPencilsAtStart = x1 * x2;
        const pencilsAfterTwoMonths = totalPencilsAtStart - (1 / 5 * totalPencilsAtStart);
        const pencilsAtEndOfYear = 1 / 3 * pencilsAfterTwoMonths;

        return pencilsAtEndOfYear;
}
