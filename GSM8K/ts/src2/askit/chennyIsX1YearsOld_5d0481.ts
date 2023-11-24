// Recompilation count: 0
export function chennyIsX1YearsOld_5d0481({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Chenny is 'x1' years old. Alyana is 'x2' years younger than Chenny. How old is Anne if she is 'x3' years older than Alyana?
    let alyanaAge : number = x1 - x2;
    let anneAge : number = alyanaAge + x3;
    return anneAge;
}
