// Recompilation count: 0
export function ramUsesALotOf_4111d3({ x1 }: {
    x1: number;
}): number {
    // Ram uses a lot of pens. He discovered that he can save money by mixing the ink from five empty pens to make one full pen. If he buys 'x1' pens and then uses them to make new pens when the ink runs low, how many total pens does he get to have?
    let totalPens = x1;
    while(x1 >= 5) {
        let newPens = Math.floor(x1 / 5); // find how many new pens he can make
        totalPens += newPens; // add the new pens to the total
        x1 = newPens + (x1 % 5); // update x1 with the number of new pens and the remaining pens that can't make a new pen yet
    }
    return totalPens;
} 
