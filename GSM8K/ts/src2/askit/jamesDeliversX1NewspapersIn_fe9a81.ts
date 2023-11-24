// Recompilation count: 0
export function jamesDeliversX1NewspapersIn_fe9a81({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // James delivers 'x1' newspapers in a day. He delivers 'x2' newspapers to District A, 
    // some to District B and 'x3' newspapers to District C. 
    // How many newspapers does he deliver to District B?
    const districtB = x1 - (x2 + x3);
    return districtB;
}
