// Recompilation count: 0
export function shannonMakesHerselfIcedCoffee_0400b9({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Shannon makes herself iced coffee by brewing hot coffee and adding ice cubes. Each ice cube cools the coffee by 'x1' degrees but makes the coffee 'x2' milliliters weaker. Any added liquid also weakens the coffee. How many milliliters weaker is Shannon’s iced coffee when it is cooled by 'x3' degrees and she adds 'x4' milliliters of cream?

        // First, let's calculate how many ice cubes Shannon needs to cool the coffee by 'x3' degrees
        const numberOfIceCubes = x3 / x1;
        // Each ice cube makes the coffee 'x2' milliliters weaker, so multiply by the amount of ice cubes
        let coffeeWeaknessFromIce= numberOfIceCubes * x2;

        // Finally, the coffee is additionally diluted by 'x4' milliliters of cream
        const totalWeakenedMilliliters = coffeeWeaknessFromIce + x4;

        return totalWeakenedMilliliters;
    }
