// Recompilation count: 0
export function johnOrdersSomePizzasTo_ca4f0f({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // John orders some pizzas to share with his friends. There are 'x1' friends in total, and John wants to make sure each can have 'x2' slices. Pizzas are only sold sliced into 'x3' portions. How many Pizzas does John need to order?

    // The total number of slices john needs
    let totalSlices = x1 * x2;
    
    // Number of pizzas
    let numberOfPizzas = Math.ceil(totalSlices / x3);

    return numberOfPizzas;
}
