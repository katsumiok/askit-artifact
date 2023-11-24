// Recompilation count: 0
export function fourBooksAreArrangedOn_5a4a21({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Four books are arranged on a shelf. The first book is 'x1' mm thick while the second book is 'x2' mm thick. 
        // The third book is 'x3' mm less thick than the second book, and the fourth book is twice as thick as the first book. 
        // What is the total thickness of the four books?

        let book3 = x2 - x3; // The third book is 'x3' mm less thick than the second book
        let book4 = 2 * x1; // The fourth book is twice as thick as the first book

        return x1 + x2 + book3 + book4; // Return the total thickness of the four books
    }
