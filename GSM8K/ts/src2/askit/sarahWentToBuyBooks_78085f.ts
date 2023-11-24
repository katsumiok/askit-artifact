// Recompilation count: 0
export function sarahWentToBuyBooks_78085f({ x1 }: {
    x1: number;
}): number {
    // Total amount spent by Sarah
    const totalAmountSpent: number = 300;
    // Cost of each book
    const costPerBook: number = 15;

    // Calculate total books bought by Sarah
    const totalBooksBought: number = totalAmountSpent / costPerBook;

    // Calculate number of books each child got
    const booksPerChild: number = totalBooksBought / x1;

    return booksPerChild;
}
