// Recompilation count: 0
export function madelineAteX1GrapesHer_a500b0({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Madeline ate 'x1' grapes. Her brother wanted to make grape juice and used 
    // up 'x2' times as many grapes then Madeline to make a full glass. 
    // Their mother then used the remaining grapes to make 'x3' pies. 
    // How many grapes were there at the beginning if the pie recipe calls for 'x4' grapes per pie?
    let madelinesGrapes = x1;
    let brotherGrapes = x1 * x2;
    let motherGrapes = x3 * x4;
    
    // Add the amounts to calculate the total number of grapes
    return madelinesGrapes + brotherGrapes + motherGrapes;
}
