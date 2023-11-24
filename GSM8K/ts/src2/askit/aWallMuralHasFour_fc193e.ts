// Recompilation count: 1
export function aWallMuralHasFour_fc193e({ x1 }: {
    x1: number;
}): number {
        // A wall mural has four different colors of paint in it: red, white, purple, and yellow.  
        // There are equal amounts of red, white, and purple paint in the mural. 
        // Half the mural is yellow. 
        // If the mural used 'x1' pints of paint in all, how many pints of red paint was used?

        // Since half the mural is yellow, then the other half is split equally between red, white, and purple
        // Hence, the amount of red paint used is a third of half of the total amount
        return x1 / 2 / 3;
}
