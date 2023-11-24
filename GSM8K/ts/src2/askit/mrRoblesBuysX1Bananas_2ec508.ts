// Recompilation count: 0
export function mrRoblesBuysX1Bananas_2ec508({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Mr. Robles buys 'x1' bananas, which is enough to feed his three monkeys for a week. 
        // One monkey eats 'x2' bananas each day. 
        // The second monkey eats 'x3' more bananas than the first monkey each day.
        // The third monkey eats the rest of the bananas each day.  
        // We're calculating how many bananas the third monkey eats each day.

        // The amount of bananas bought needs to be divided by 7 (days in a week) to get 
        // the amount of bananas available for monkeys each day
        let dailyBananas = x1 / 7;

        // The first monkey eats 'x2' bananas a day
        dailyBananas -= x2;

        // The second monkey eats 'x3' bananas more than the first monkey each day
        dailyBananas -= (x2 + x3);

        // The third monkey will eat the rest of the bananas
        return dailyBananas;
    }
