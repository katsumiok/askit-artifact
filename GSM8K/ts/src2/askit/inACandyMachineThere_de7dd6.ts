// Recompilation count: 0
export function inACandyMachineThere_de7dd6({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {

    // In a candy machine, there are 'x1' more than four times the number of pink gumballs as there are blue gumballs. 
    // If there are 'x2' blue gumballs how many pink ones are there?
    
    let fourTimesBlueGumballs = 4 * x2;
    let pinkGumballs = fourTimesBlueGumballs + x1;

    return pinkGumballs;
}
