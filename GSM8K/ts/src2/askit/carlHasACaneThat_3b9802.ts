// Recompilation count: 0
export function carlHasACaneThat_3b9802({ x1 }: {
    x1: number;
}): number {
    // Isabel's height is 'x1'. 
    // Ned is two feet shorter than Isabel. So, Ned's height =  x1 - 2.
    // Carl is one foot taller than Ned. So, Carl's height = Ned's height + 1 = (x1 - 2) + 1.
    // Carl's cane is half as long as he is tall. So, the length of Carl's cane = Carl's height / 2 = ((x1 - 2) + 1) / 2.

    return ((x1 - 2) + 1) / 2;
}
