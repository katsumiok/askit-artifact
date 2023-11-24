// Recompilation count: 0
export function andreaHasX1MoreApples_be3e1a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Andrea has 'x3' apples
    let andreaApples: number = x3;
    // Andrea has 'x1' more apples than Jamal so Jamal has 'x3 - x1' apples
    let jamalApples: number = x3 - x1;
    // Jamal has 'x2' more bananas than apples so he has 'x2 + jamalApples' bananas
    let jamalBananas: number = x2 + jamalApples;
    // Andrea has half as many bananas as Jamal so she has 'jamalBananas / 2' bananas
    let andreaBananas: number = jamalBananas / 2;
    // Total fruits are the sum of Andrea's and Jamal's apples and bananas
    let totalFruits: number = andreaApples + jamalApples + andreaBananas + jamalBananas;
    return totalFruits;
}
