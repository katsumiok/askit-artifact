// Recompilation count: 0
export function inARaceWithX1_d000a9({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Calculate the total number of Chinese
  let totalChinese = x1 - x2;

  // Given that number of Chinese boys is 60
  let chineseBoys = 60;

  // Calculate the number of Chinese girls
  let chineseGirls = totalChinese - chineseBoys;

  return chineseGirls;
}
