// Recompilation count: 0
export function atAshleySSchoolThey_70a277({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
   // At Ashley's school, they start a reforestation campaign where each child plants a tree and each teacher plants 'x1' trees. The school has 'x2' classes with an average of 'x3' students and 'x4' teachers per class. How many trees will they have planted at the end of the campaign?
   let totalTrees = (x2 * x3) + (x1 * x2 * x4);
   return totalTrees;
}
