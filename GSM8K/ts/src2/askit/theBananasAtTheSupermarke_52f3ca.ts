// Recompilation count: 0
export function theBananasAtTheSupermarke_52f3ca({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // The bananas at the supermarket cost $0.80 each, or a bunch for $3.00. 
    // Jenny buys 'x1' bunches that average 'x2' bananas per bunch. How much money, in dollars, did she save by buying the bananas in bunches instead of individually?
    let costPerBanana = 0.8;  // cost of each banana if bought individually
    let costPerBunch = 3.0;  // cost of each bunch

    let totalBananas = x1 * x2;  // total number of bananas Jenny gets from the bunches
    let costIfBoughtIndividually = totalBananas * costPerBanana;  // total cost if these bananas were bought individually

    let costIfBoughtInBunch = x1 * costPerBunch;  // total cost for Jenny to buy the bananas in bunches

    let moneySaved = costIfBoughtIndividually - costIfBoughtInBunch;  // calculate how much money Jenny saved by buying in bunches

    return moneySaved;
}
