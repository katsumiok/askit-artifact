// Recompilation count: 0
export function michealLovesRidingABike_6b71cc({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // Micheal loves riding a bike. He rode it at least 'x1' times a week and makes 'x2' kilometers each time. 
        // He did that for four weeks, and then he decided, to ride the bike only 'x3' times a week, 
        // but for 'x4' kilometers each time, and he did that for 'x5' weeks. How many kilometers did Micheal do in total?

        let firstFourWeeks = x1 * x2 * 4; // Times a week * kilometers each time * 4 weeks
        let remainingWeeks = x3 * x4 * x5;// x3 times a week * x4 kilometers each time * x5 weeks

        return firstFourWeeks + remainingWeeks;
    }
