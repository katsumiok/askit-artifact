// Recompilation count: 0
export function thereIsOneSetOf_057ab0({ x1 }: {
    x1: number;
}): number {
    // There is one set of twins and one set of triplets. 
    // One twin is 'x1' years older than one triplet. 
    // If their combined ages are 44, how old is one of the twins?
    // Twins are of the same age, call it t
    // Triplets are of the same age, call it p
    // As a twin is 'x1' years older than a triplet, t = p + x1
    // As their combined ages are 44, 2*t + 3*p = 44
    // Replacing t by p + x1 in the second equation gives us: 2*(p + x1) + 3*p = 44
    // Simplifying gives us: 2*p + 2*x1 + 3*p = 44, hence 5*p + 2*x1 = 44, hence p = (44 - 2*x1) / 5
    // As we are looking for the age of a twin, we return p + x1
    let p = (44 - 2 * x1) / 5;
    return p + x1;
}
