// Recompilation count: 0
export function princeIsAButcherHe_b0e062({ x1 }: { x1: number; }): number {
    // Prince is a butcher. He sells 15kg of meat every hour he works, 
    // and he works 'x1' hours a day. 
    // His friend Bill gives him a bull that weighs 750kg. 
    // How many days will it take Prince to sell the meat from Bill's bull?

    // Calculate how much meat Prince sells per day
    const meatPerDay = x1 * 15;

    // Calculate how many days it will take to sell all the meat
    const daysToSellAll = 750 / meatPerDay;

    return daysToSellAll;
}
