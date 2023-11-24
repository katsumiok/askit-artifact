// Recompilation count: 0
export function wendyWantsToPlaceX1_c7e4de({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Wendy wants to place 'x1' more than double the number of books in a shelving system with 'x2' rows and 'x3' columns. How many books will she need to carry to complete her task?
        let totalBooksInShelf = x2 * x3; // total books that can be placed in the shelf
        let doubleOfBooksInShelf = totalBooksInShelf * 2; // double the number of books that can be placed in the shelf
        return doubleOfBooksInShelf + x1; // she wants to place 'x1' more than double the number of books, so add 'x1'
    }
