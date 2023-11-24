// Recompilation count: 0
export function kimberlyBoughtX1PackagesOf_c3613f({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Kimberly bought 'x1' packages of cat food and 'x2' packages of dog food. Each package of cat food contained 'x3' tins, and each package of dog food contained 'x4' tins. How many more tins of cat food than dog food did Kimberly buy?
    const totalTinsCatFood = x1 * x3;
    const totalTinsDogFood = x2 * x4;
    const difference = totalTinsCatFood - totalTinsDogFood;

    return difference;
}
