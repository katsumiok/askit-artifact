// Recompilation count: 0
export function aliceHasX1MoreBooks_bd9edc({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Alice has 'x1' more books than Steven. Clara has two times as many books as Steven.
  // If Clara has 'x2' books, then Steven has x2/2 books
  let stevenBooks = x2 / 2;
  
  // Alice has x1 more books than Steven, so Alice has stevenBooks + x1 books
  let aliceBooks = stevenBooks + x1;

  // Number of books Clara has more than Alice is x2 - aliceBooks
  return x2 - aliceBooks;
}
