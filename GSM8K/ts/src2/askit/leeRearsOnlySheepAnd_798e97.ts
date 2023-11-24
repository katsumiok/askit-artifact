// Recompilation count: 1
export function leeRearsOnlySheepAnd_798e97(): number {
  // Lee rears only sheep and geese on his farm.  
  // If the total number of animal legs is 70, and the total number of animal heads is 20, 
  // how many sheep live on Lee's farm?
  
  // Sheep have 4 legs and geese have 2 legs.
  // If all the animals were geese (with 2 legs), there would be 2 * 20 = 40 legs.
  // The actual total legs are 70, so the difference (70 - 40 = 30) must be the result 
  // of the additional two legs of each sheep (compared to the geese).
  // So, we divide the difference by 2 to find the number of sheep.
  
  const totalLegs = 70;
  const totalHeads = 20;
  const gooseLegs = 2 * totalHeads;
  const sheepLegs = totalLegs - gooseLegs;
  const numberOfSheep = sheepLegs / 2;

  return numberOfSheep;
}
