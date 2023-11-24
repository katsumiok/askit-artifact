// Recompilation count: 0
export function howieWantsToBuyCupcakes_921823({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Howie wants to buy cupcakes for everyone in his class as a special treat. He's not sure if people will want vanilla or chocolate cupcakes so he decides to get one of each for everyone. If he gets the same amount of 'x1' cupcakes for each himself, his teacher, and his 'x2' classmates, how many cupcakes should Howie buy?
    const totalPeople = 1 /*Howie*/ + 1 /*Teacher*/ + x2 /*classmates*/;
    const totalCupcakes = x1 /*amount of cupcakes for one person*/ * totalPeople;
    return totalCupcakes;
}
