// Recompilation count: 0
export function emilyHasX1KidsNamed_dc288a({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Emily has 'x1' kids named Amy, Jackson, Corey, and James. Amy is 'x2' years older than Jackson and 'x3' years younger than Corey. If James is 'x4' and is 'x5' year younger than Corey, how old is Jackson?
    
    // First, it would be possible to know Corey's age because James is 'x4' and is 'x5' year younger than Corey, So, Corey age would be x4 + x5 
    let corey = x4 + x5;
    
    // Then, Amy's age can be determined because Amy is 'x3' years younger than Corey
    let amy = corey - x3;
    
    // Finally, we can determine Jackson's age because Amy is 'x2' years older than Jackson
    let jackson = amy - x2;

    return jackson;
}
