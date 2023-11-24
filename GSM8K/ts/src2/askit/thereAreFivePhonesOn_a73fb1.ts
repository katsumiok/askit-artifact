// Recompilation count: 0
export function thereAreFivePhonesOn_a73fb1({}: {}): number {
  // There are five phones on a phone plan. The main phone costs twice as much as each additional phone. 
  // If the main phone plan costs $20, how much does the whole phone plan cost?

  const mainPhoneCost = 20;
  const additionalPhoneCost = mainPhoneCost / 2;
  const numberOfAdditionalPhones = 4; 

  const totalCost = mainPhoneCost + (additionalPhoneCost * numberOfAdditionalPhones);
  
  return totalCost;
}
