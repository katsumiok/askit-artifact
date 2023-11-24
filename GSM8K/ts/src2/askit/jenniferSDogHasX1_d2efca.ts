// Recompilation count: 0
export function jenniferSDogHasX1_d2efca({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Jennifer's dog has 'x1' puppies, 'x2' of which have spots. Brandon's dog has 'x3' puppies, 'x4' of which have spots. What percentage of all the puppies have spots?
        
        // Total number of puppies is the sum of x1 and x3
        let totalPuppies = x1 + x3;

        // Total number of puppies with spots is the sum of x2 and x4
        let puppiesWithSpots = x2 + x4;

        // Percentage of puppies with spots is (total with spots / total puppies) * 100
        let percentage = (puppiesWithSpots / totalPuppies) * 100;

        return percentage;
    }
