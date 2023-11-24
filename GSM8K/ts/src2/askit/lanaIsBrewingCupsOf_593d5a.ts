// Recompilation count: 0
export function lanaIsBrewingCupsOf_593d5a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Lana is brewing cups of tea for her friends. She has 'x1' cups, and she divides these into 'x2' rows. In each row, she creates equal amounts of chamomile and mint tea cups. She then uses the remaining cups to brew a total of 'x3' cups of cinnamon tea. How many cups of mint tea are in each row?
        
        // First, we subtract the cups of cinnamon tea from the total cups
        let remainingCups = x1 - x3;

        // She divides the remaining cups into 'x2' rows equally for chamomile and mint tea
        // So each row will have remainingCups / x2 total cups (both chamomile and mint)

        // Since chamomile and mint tea cups are equal in each row, we divide by 2 to find the cups of mint tea in each row
        let mintTeaInEachRow = (remainingCups / x2) / 2;

        return mintTeaInEachRow;
    }
