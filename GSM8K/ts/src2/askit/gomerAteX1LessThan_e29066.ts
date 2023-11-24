// Recompilation count: 0
export function gomerAteX1LessThan_e29066({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // Gomer ate 'x1' less than 'x2' scoops of mashed potatoes.  If it takes 'x3' less than 'x4' potatoes to make 'x5' less than 'x6' scoops of mashed potatoes, how many potatoes did Gomer eat?
    const scoopsEatenByGomer = x2 - x1;
    const potatoPerScoop = (x4 - x3) / (x6 - x5);
    const potatoesEatenByGomer = scoopsEatenByGomer * potatoPerScoop;
    return potatoesEatenByGomer;
}
