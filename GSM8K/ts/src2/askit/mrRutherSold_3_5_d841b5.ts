// Recompilation count: 0
export function mrRutherSold_3_5_d841b5({}: {}): number {
        // Mr. Ruther sold 3/5 of his land and had 12.8 hectares left. How much land did he have at first?
        // He has 2/5 of his original land left (1 - 3/5 = 2/5), so we can calculate the original land.

         let remainingLand = 12.8 ;    // the land left
         // now let's do the math
         let initialTotalLand = remainingLand / (2/5);   // calculates the initial total land
         return initialTotalLand;    // should return initial total land
    }
