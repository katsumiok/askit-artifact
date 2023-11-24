// Recompilation count: 0
export function martinSWeightIsX1_52b4fd({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Martin's weight is 'x1' kg. Carl’s weight is 'x2' kg more than Martin’s weight. 
    // Christian’s weight is 'x3' kg more than Carl’s weight. Harry is 'x4' kg less than Christian’s weight. 
    // Calculation: Martin's Weight + Carl's weight difference + Christian's weight difference - Harry's weight difference
    
    let harrysWeight: number = x1 + x2 + x3 - x4;
    return harrysWeight;
}
