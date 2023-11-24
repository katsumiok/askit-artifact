// Recompilation count: 0
export function billyIsBuyingSomeCandy_6533d6({ x1 }: {
    x1: number;
}): number { 
    // Price of the candy per pound
    const candyPrice = 1.5; 

    // Price of the gumball
    const gumballPrice = 0.05;

    // Money Billy spent on gumballs
    const gumballCost = gumballPrice * x1;

    // Money Billy spent on candy, which is half of the total money (assuming he did not end up with less than $0 after buying gumballs)
    const candyCost = (10 - gumballCost * 2);

    if(candyCost < 0) {
        throw new Error('Billy did not have enough money to buy the gumballs and candy!');
    }

    // Pound of candy Billy bought
    const candyPounds = candyCost / candyPrice;

    return candyPounds;
}
