// Recompilation count: 0
export function ryanPlantsX1FlowersA_5432fd({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Ryan plants 'x1' flowers a day in his garden. After 'x2' days, how many flowers does he have if 'x3' did not grow?
        let totalFlowers = x1 * x2;
        let actualFlowers = totalFlowers - x3;
        return actualFlowers;
    }
