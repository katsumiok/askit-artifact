// Recompilation count: 0
export function masonLikesEatingCarrotsIf_f17568({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Mason likes eating carrots. If he eats 'x1' carrots each on weekdays and 'x2' carrots each on Saturday and Sunday, how many carrots does he eat a week?
    const weekdays = 5 * x1;
    const weekend = 2 * x2;
  
    return weekdays + weekend;
}
