// Recompilation count: 1
export function jeffIsX1YearsOlder_4b7f49({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Jeff is 'x1' years older than his younger sister, Martha. 
    // Martha, on the other hand, is 'x2' years younger than her boyfriend, Mike. 
    // If Mike is 'x3' years old, how old is Jeff?
    let marthaAge = x3 - x2;
    let jeffAge = marthaAge + x1;
    
    return jeffAge;
}
