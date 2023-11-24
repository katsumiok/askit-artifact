// Recompilation count: 0
export function aTomatoVendorDecidesTo_99ebbe({ x1 }: {
    x1: number;
}): number {
    // A tomato vendor decides to switch who he buys his tomatoes for.  He sells 'x1' tomatoes a day.  He used to buy them for $.5 each but he gets a new vendor who sells them for $.4 each.  How much money does he save a week?
    
    const oldCostPerTomato = 0.5;
    const newCostPerTomato = 0.4;

    const dailySavings = (oldCostPerTomato - newCostPerTomato) * x1;
    const weeklySavings = dailySavings * 7; // Because there are 7 days in a week

    return weeklySavings;
}
