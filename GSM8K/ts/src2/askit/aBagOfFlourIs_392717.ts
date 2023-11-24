// Recompilation count: 0
export function aBagOfFlourIs_392717({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A bag of flour is divided into 'x1' portions of 'x2' kilograms each. How much flour (in kilograms) was in three bags in total, before it was divided into portions?
  let totalFlourInOneBag = x1 * x2; // total amount of flour in one bag
  let totalFlourInThreeBags = totalFlourInOneBag * 3; // total amount of flour in three bags
  return totalFlourInThreeBags; // return the total amount of flour in three bags
}
