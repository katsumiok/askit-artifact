// Recompilation count: 1
export function russellWorksAtAPet_a6dfd5({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // First calculate the total straw given to rats and hamsters
    let totalRatsAndHamstersStraw = x6 - x5;
    
    // Then calculate the straw given to hamsters
    let totalHamstersStraw = x3 * x4;
    
    // The remaining straw is for rats
    let totalRatsStraw = totalRatsAndHamstersStraw - totalHamstersStraw;
    
    // As each rat is given equal pieces of straw, divide total straw for rats by number of pieces each rat receives
    // to get total number of rats. Then divide by number of cages to get rats in each cage.
    let ratsInEachCage = (totalRatsStraw / x2) / x1;
    
    return ratsInEachCage;
}
