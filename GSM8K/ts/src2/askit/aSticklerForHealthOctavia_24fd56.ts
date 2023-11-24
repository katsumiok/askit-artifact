// Recompilation count: 0
export function aSticklerForHealthOctavia_24fd56({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A stickler for health, Octavia drinks half the daily recommended cups of coffee. By contract, Octavia’s husband Juan drinks 'x1' times the amount of coffee she drinks. Juan’s doctor has asked him to reduce his coffee intake to the daily recommendation of 'x2' cups. By how many cups must Juan reduce his daily coffee intake?
        
        const octaviaCoffee = x2 / 2; // Octavia drinks half the daily recommended cups
        const juanCoffee = octaviaCoffee * x1; // Juan drinks 'x1' times the amount of coffee Octavia drinks
        const amountToReduce = juanCoffee - x2; // The amount by which Juan should reduce his coffee intake
        
        return amountToReduce; // Return the amount
}
