// Recompilation count: 0
export function walterIsCollectingMoneyFor_9bf092({}: {}): number {
  // Walter collects $500 from neighbors.
  let moneyFromNeighbors: number = 500;

  // He collects $1500 from online fund.
  let moneyFromOnlineFund: number = 1500;

  // His friend gives him $200.
  let moneyFromFriend: number = 200;

  // Calculate total money collected without lawyer's donation
  let totalMoneyWithoutLawyer: number = moneyFromNeighbors + moneyFromOnlineFund + moneyFromFriend;

  // Lawyer is going to donate three times as much as everyone else donates. 
  let lawyerContribution: number = totalMoneyWithoutLawyer * 3;

  // The function returns the lawyer's contribution
  return lawyerContribution;
}
