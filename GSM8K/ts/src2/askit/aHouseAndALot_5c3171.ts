// Recompilation count: 0
export function aHouseAndALot_5c3171({}: {}): number {
  let totalCost: number = 120000;
  let lotCost: number = totalCost / 4; // as the house costs three times as much as the lot
  let houseCost: number = totalCost - lotCost;
  
  return houseCost; // returns the cost of the house
}
