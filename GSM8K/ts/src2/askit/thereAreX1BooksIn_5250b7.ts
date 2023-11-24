// Recompilation count: 0
export function thereAreX1BooksIn_5250b7({ x1 }: {
    x1: number;
}): number {
        // Half of the books are in English and 10% are in German. Hence, the rest are in Spanish.
        // Let's calculate the number of English and German books first.
        const englishBooks = x1 / 2;
        const germanBooks = x1 * 0.1;
        
        // Now, let's subtract the number of English and German books from the total.
        const spanishBooks = x1 - englishBooks - germanBooks;
        
        return spanishBooks;
    }

