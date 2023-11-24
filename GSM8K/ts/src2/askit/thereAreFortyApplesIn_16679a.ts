// Recompilation count: 0
export function thereAreFortyApplesIn_16679a({}: {}): number {
  const applesPerBox = 40;
  const boxesOrdered = 2;
  const applesPerPack = 8;

  const totalApples = applesPerBox * boxesOrdered;
  return Math.floor(totalApples / applesPerPack);
}
