// Recompilation count: 0
export function julieHad_500SheSpent_521e75({}: {}): number {
  // Julie had $500. 
  let totalMoney: number = 500;

  // She spent 20% of it on clothes 
  let spentOnClothes: number = totalMoney * 0.2;
  totalMoney -= spentOnClothes;

  // and then 25% of the remaining money on CDs. 
  let spentOnCDs: number = totalMoney * 0.25;
  totalMoney -= spentOnCDs;

  // How much money did Julie have left?
  return totalMoney;
}
