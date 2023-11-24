// Recompilation count: 0
export function trentIsX1YearsOlder_8e7d6c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Trent is 'x1' years older than Jane, and Jane is 'x2' years younger than Quinn. If Quinn is 30, how old is Trent?
    // Firstly, calculate Jane's age by subtracting 'x2' from Quinn's age.
    let janeAge = 30 - x2;
    // Then calculate Trent's age by adding 'x1' to Jane's age.
    let trentAge = janeAge + x1;
    return trentAge;
}
