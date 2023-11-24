// Recompilation count: 1
export function theCombinedAgeOfPeter_49c813({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // calculate the age of John
  let j: number = (x1 - 2*x2) / 4;
  // calculate the age of Peter
  let p: number = 2*j + x2;
  return p;
}
