// Recompilation count: 0
export function deniseAndDanielAreReading_bb8772({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Denise and Daniel are reading the same book. Yesterday, Denise read 'x1' pages while Daniel read 'x2' pages. Today, Denise read 'x3' more than as many pages as what Daniel read yesterday, while Daniel was not able to read any pages today. How many more pages did Denise read more than Daniel?
    
    let totalPagesDeniseRead = x1 + x2 + x3;
    let totalPagesDanielRead = x2;
    
    return totalPagesDeniseRead - totalPagesDanielRead;
}
