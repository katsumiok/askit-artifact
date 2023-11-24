// Recompilation count: 0
export function tobyIsReadingABook_812b95({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // Total words in the book
        let totalWords = x1 * x2;
        
        // Time taken to read the book in minutes
        let readingTime = totalWords / x3;
        
        // Remaining time before Toby has to be at the airport
        let remainingTime = x4 - readingTime;
        
        // Minutes early Toby will be if he leaves as soon as he finishes the book
        let earlyTime = remainingTime - x5;

        return earlyTime;
    }

