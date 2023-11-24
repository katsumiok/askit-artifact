// Recompilation count: 0
export function stetsonMadeABetWith_d9336d({ x1 }: {
    x1: number;
}): number {
    // Stetson made a bet with Alec that he would give up $10 for each orange he eats. While at the farm, Stetson ate 2/5 of the oranges they picked. If they picked 'x1' oranges, calculate the total amount of money Stetson gave up?
    let ateOranges = x1 * (2 / 5); // calculate 2/5 of the picked oranges
    let gaveUpMoney = ateOranges * 10; // calculate the money Stetson gave up by multiplying the number of eaten oranges by 10
    return gaveUpMoney;
}
