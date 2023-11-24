// Recompilation count: 0
export function daisyBoughtABagOf_c1d16a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Daisy bought a bag of potatoes that weighed 'x1' pounds. 
        // She also bought a bag of sweet potatoes that weighed 'x2' times as much as the potatoes 
        // and a bag of carrots that weighed 'x3' pounds fewer than the sweet potatoes. 
        // How many pounds of carrots did Daisy buy?
        const sweetPotatoes = x1 * x2;
        const carrots = sweetPotatoes - x3;
        return carrots;
}
