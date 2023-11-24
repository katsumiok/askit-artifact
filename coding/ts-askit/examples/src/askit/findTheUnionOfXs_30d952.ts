// Recompilation count: 0
export function findTheUnionOfXs_30d952({ xs, ys }: {
  xs: number[];
  ys: number[];
}): number[] {
  // Find the union of 'xs' and 'ys'
  return [...new Set([...xs, ...ys])];
}
