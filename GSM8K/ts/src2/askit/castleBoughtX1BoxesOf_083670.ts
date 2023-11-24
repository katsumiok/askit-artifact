// Recompilation count: 0
export function castleBoughtX1BoxesOf_083670({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Castle bought 'x1' boxes of Coco Crunch and 'x2' boxes of Fruit Loops this week. Last week she bought 'x3' boxes of cereal. How many more boxes of cereal did she buy this week than last week?
    let thisWeekBoxes = x1 + x2;
    return thisWeekBoxes - x3;
}
