// Recompilation count: 0
export function jerryCountsSixBirdsNesting_279b9b({ x1 }: {
    x1: number;
}): number {
   // Jerry counts six birds nesting in the bushes
   let birdsNesting = 6;
   
   // 2/3rd of that number of birds flying overhead
   let birdsFlying = (2/3) * birdsNesting;
   
   // 'x1' groups of eight birds each feeding
   let birdsFeeding = x1 * 8;
   
   // Total number of birds counted
   let totalBirdCount = birdsNesting + birdsFlying + birdsFeeding;
   
   return totalBirdCount;
}
