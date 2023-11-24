// Recompilation count: 0
export function zoeyAndSydneyAreHaving_0426f1({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Zoey and Sydney are having a watermelon seed spitting contest. Whoever spits their seeds the most total distance wins. They each get one watermelon. Zoey's has 'x1' seeds and she spits each one 'x2' feet. Sydney's has 'x3' she spits each one 'x4' feet. What is the average total distance spat?
    
    const zoeyTotalDistance = x1 * x2;
    const sydneyTotalDistance = x3 * x4;
    
    return (zoeyTotalDistance + sydneyTotalDistance) / 2;
}
