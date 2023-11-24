// Recompilation count: 0
export function oscarHasX1LollipopsAnd_d9d7bd({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Oscar has 'x1' lollipops and eats 'x2' on his way to school.  
    let lollipops = x1 - x2;

    // He passes 'x3' out to his friends.  
    lollipops = lollipops - x3;

    // He buys twice as many lollipops on his way home as he gave to his friends.  
    lollipops = lollipops + 2*x3;

    // He eats 'x4' more that night and 'x5' more in the morning.  
    lollipops = lollipops - x4 - x5;

    // How many lollipops does Oscar have?
    return lollipops;
}
