// Recompilation count: 0
export function saraWantsToBuyHerself_f2431e({ x1, x2 }: {
    x1: number;
    x2: number;
}): number { 
    // Calculate the total cost for jacket ($30) and shoes ($20 per pair). 
    let totalCost = 30 + (20 * x1);

    // Calculate how much Sara earned from babysitting.
    let babysittingEarnings = x2 * 5;

    // Calculate how much she already saved.
    let savings = 10 + babysittingEarnings;

    //Calculate remaining money she needs to make
    let remaining = totalCost - savings;

    // Calculate how many times sara need to mow the lawn
    let lawnMowingTimes = Math.ceil(remaining / 4); 

    return lawnMowingTimes; // return the answer
}
