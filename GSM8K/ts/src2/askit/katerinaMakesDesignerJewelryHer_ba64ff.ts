// Recompilation count: 0
export function katerinaMakesDesignerJewelryHer_ba64ff({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Katerina makes designer jewelry.  Her specialty is topaz necklaces.  She uses 'x1' topaz gemstones per necklace, 
        // and fills the space between gemstones using sterling silver beads.  
        // If each topaz gemstone is one inch long, each sterling silver bead is one-quarter of an inch long, 
        // and each necklace is made to a total length of 'x2' inches, 
        // how many sterling silver beads does Katerina use per necklace?

        // First, calculate the total length of the gemstones in the necklace
        let totalLengthOfGemstones = x1 * 1; 

        // Next, calculate the remaining length to be filled with beads
        let remainingLength = x2 - totalLengthOfGemstones;

        // Since each bead is one-quarter of an inch, the number of beads used is the 
        // remaining length divided by the length of each bead
        let numberOfBeads = remainingLength / 0.25;

        // Return the number of beads
        return numberOfBeads;
    }
