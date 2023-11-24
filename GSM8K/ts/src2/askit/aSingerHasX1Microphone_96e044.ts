// Recompilation count: 0
export function aSingerHasX1Microphone_96e044({ x1 }: {
    x1: number;
}): number {
  // A singer has 'x1' microphones that he wants to arrange in pairs on a stage. 
  // While making the arrangement, he realizes that 20% of the microphones won't find any space to fit in after arranging the rest in pairs. 
  // How many pairs of microphones was he able to arrange on the stage?

  // If 20% of microphones won't find any space then 80% would find the space
  const eightyPercentMicrophones = x1 * 0.8;

  // As the microphones are arranged in pairs, we divide the number by two
  const pairs = eightyPercentMicrophones / 2;

  // Return the number of pairs
  return Math.floor(pairs);
}
