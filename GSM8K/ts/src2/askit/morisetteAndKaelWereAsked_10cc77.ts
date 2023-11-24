// Recompilation count: 0
export function morisetteAndKaelWereAsked_10cc77({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Morisette brought 'x1' apples and 'x2' oranges, while Kael brought twice the amount of apples and half the number of oranges than Morisette.
        // Calculate total number of fruits
        let morisette_apples = x1;
        let morisette_oranges = x2;
        let kael_apples = 2 * x1;
        let kael_oranges = 0.5 * x2;
        
        let total_fruits = morisette_apples + morisette_oranges + kael_apples + kael_oranges;
        return total_fruits;
    }

