// Recompilation count: 1
export function whenMarcusWakesUpHis_fe4454({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
        // When Marcus wakes up, his house is 'x1' degrees. He spends 'x2' hours baking, and every hour the oven is on it raises the house's temperature by 'x3' degrees. 
        let temperatureAfterBaking = x1 + x2 * x3;

        // Then Marcus opens a window for 'x4' minutes, and the house cools down 'x5' degrees for every 'x6' minutes the window is open.
        let temperatureAfterCooling = temperatureAfterBaking - (x4 / x6) * x5;

        //Returning the house's final temperature
        return temperatureAfterCooling;
    }
