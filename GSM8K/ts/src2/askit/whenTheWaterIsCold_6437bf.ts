// Recompilation count: 0
export function whenTheWaterIsCold_6437bf({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    //When the water is warm Ray swims a mile in 'x2' minutes more than twice as long. 
    let warmWaterTime = (2 * x1) + x2; 

    //Ray swims 'x3' miles
    let coldDayTime = x1 * x3; 
    let warmDayTime = warmWaterTime * x3; 

    //How much longer does Ray take to swim 'x3' miles on a hot day than a cold day?
    return warmDayTime - coldDayTime;
}
