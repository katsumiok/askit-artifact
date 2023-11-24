// Recompilation count: 0
export function henryIsMakingCookiesFor_a1f942({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Firstly, you need to find the number of cookies he has before dropping any.
    // That can be achieved by adding 'x2' to 'x3'.
    let beforeDrop = x3 + x2;
    
    // Secondly, subtract 'x1' from 'beforeDrop' because he baked 'x1' more than he wanted,
    // to get the number of cookies he wanted to make this year.
    let thisYear = beforeDrop - x1;
    
    // Since 'thisYear' is twice the number he baked last year, divide 'thisYear' by 2 
    // to get the number of cookies he baked last year.
    return thisYear / 2;
}
