// Recompilation count: 0
export function johnArmWrestlesX1People_1020af({ x1 }: {
    x1: number;
}): number {
        // John arm wrestles 'x1' people.  He beats 80%.  How many people did he lose to?
        const winPercentage = 0.8;
        const numLost = x1 * (1 - winPercentage);
        return numLost;
    }

