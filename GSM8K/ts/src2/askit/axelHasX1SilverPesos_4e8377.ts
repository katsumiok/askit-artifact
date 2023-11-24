// Recompilation count: 0
export function axelHasX1SilverPesos_4e8377({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Axel has 'x1' silver pesos and 'x2' gold pesos. 
        // He visits her friend Anna who has twice as many silver pesos as he has and 'x3' more gold pesos. 
        // What's the total number of pesos they have together?
        const annaSilverPesos = 2 * x1;
        const annaGoldPesos = x2 + x3;
        const totalPesos = x1 + x2 + annaSilverPesos + annaGoldPesos;

        return totalPesos;
    }
