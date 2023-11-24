// Recompilation count: 0
export function sarahHasX1BooksAnd_dea23f({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Sarah has 'x1' books and Joseph had twice the number of Sarah’s books, but he lost 'x2' of them. How many books does Joseph currently have?
    let josephBooks = 2* x1; //Joseph initially had twice the number of Sarah's books
    let currentBooksOfJoseph = josephBooks - x2; //Joseph lost 'x2' books
    return currentBooksOfJoseph;
}
