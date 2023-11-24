// Recompilation count: 0
export function andrewBakesX1MiniCinnamon_82161c({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Andrew bakes 'x1' mini cinnamon rolls and 'x2' mini blueberry muffins. A normal cinnamon roll has 'x3' calories and a normal blueberry muffin has 'x4' calories. If a mini pastry has 1/3rd of the calories of a normal version, how many calories do the pastries he baked have?
        let miniCinnamonCalories = x1 * (x3 / 3);
        let miniBlueberryMuffinCalories = x2 * (x4 / 3);
        return miniCinnamonCalories + miniBlueberryMuffinCalories;
    }
