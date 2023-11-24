// Recompilation count: 0
export function johnRunsX1MilesA_09eec8({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    /* 
       John runs 'x1' miles a week. He runs 'x2' days a week. 
       He runs 'x3' hours the first day and half as much the other two days he runs.  
       How fast does he run?
       Let's calculate total hours John runs in a week and then divide total miles by total hours to get speed.
    */

    // x3 is the hours for the first day. The other two days, he runs half as much.
    // So total three days running hours is x3 + 2 * (x3/2) = 2 * x3.
    // So total running hours a week is (x2 / 3) * 2 * x3.
    const totalHours = (x2 / 3) * 2 * x3;

    // Speed will be total miles divided by total hours.
    const speed = x1 / totalHours;

    return speed;
}
