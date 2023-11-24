// Recompilation count: 0
export function steveIsX1YearsOld_0983b7({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Steve is 'x1' years old. His wife is 'x2' years older than him. 
    let steveWifeAge = x1 + x2;

    // Their son is currently half as old as his mom 
    let sonAge = steveWifeAge / 2;

    // and their son's wife is 'x3' years younger than her husband. 
    let sonWifeAge = sonAge - x3;
    
    // How old is Steve's son's wife?
    return sonWifeAge;
}
