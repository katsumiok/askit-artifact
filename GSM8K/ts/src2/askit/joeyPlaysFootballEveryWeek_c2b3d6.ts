// Recompilation count: 0
export function joeyPlaysFootballEveryWeek_c2b3d6({ x1, x2 }: { x1: number; x2: number; }): number {
  // Joey plays football every week. 
  // Last week he played 'x1' matches on Monday, 
  // 'x2' match on Friday, and on Saturday 
  // he played double the number of matches he played on Monday. 
  // How many matches did Joey play in one week?

  // Calculate total matches played by Joey in one week
  const totalMatches = x1 + x2 + (2 * x1);

  return totalMatches;
}
