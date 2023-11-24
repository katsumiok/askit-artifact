// Recompilation count: 0
export function eliseHasBeenSellingHer_c125b4({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        //Elise sold twice as many books in the first year as she has sold in the current year, so she sold 45 * 2 = 90 books in the first year.
        //So, she has sold 90 + 45 = 135 books in total during the first and third year.
        //Given the total collection of 'x1' books, and there are currently 'x2' unsold books, it means she sold 'x1 - x2' books in total over three years.
        //So, in the second year, she sold 'x1 - x2 - 135' books.
        //Each book sells at 20$, so the total amount of money she earned in the second year is '(x1 - x2 - 135) * 20'.
    let totalBooksSoldSecondYear = x1 - x2 - 135;
    let totalMoneyEarned = totalBooksSoldSecondYear * 20;
    return totalMoneyEarned;
}
