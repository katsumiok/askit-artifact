// Recompilation count: 0
export function coleHidX1DozenEggs_0e05a3({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Cole hid 'x1' dozen eggs in the yard for the Easter egg hunt. Lamar finds 'x2' eggs. Stacy finds twice as many as Lamar. Charlie finds 'x3' less than Stacy. And Mei finds half as many as Charlie. How many eggs are still hidden in the yard?
        
        let totalEggs = x1 * 12; //Since a dozen of eggs are equal to 12
        let stacyFound = x2 * 2; //Stacy found twice as many as Lamar
        let charlieFound = stacyFound - x3; // Charlie found 'x3' less than Stacy
        let meiFound = charlieFound / 2; // Mei finds half as many as Charlie

        let eggsFound = x2 + stacyFound + charlieFound + meiFound;

        return totalEggs - eggsFound;
    }
