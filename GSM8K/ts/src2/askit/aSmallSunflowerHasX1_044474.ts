// Recompilation count: 0
export function aSmallSunflowerHasX1_044474({ x1 }: {
    x1: number;
}): number {
  // A small sunflower has 'x1' dozen seeds and a large sunflower has 50% more seeds than a small sunflower. 
  // How many sunflower seeds are there altogether?
  
  // Convert dozens to single seeds
  const smallSunflowerSeeds = x1 * 12;
  
  // Calculate the seeds of large sunflower
  const largeSunflowerSeeds = smallSunflowerSeeds * 1.5;
  
  // Total seeds
  const totalSeeds = smallSunflowerSeeds + largeSunflowerSeeds;
  
  return totalSeeds;
}
