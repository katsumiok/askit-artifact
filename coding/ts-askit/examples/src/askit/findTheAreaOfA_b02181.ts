// Recompilation count: 0
export function findTheAreaOfA_b02181({ s1, s2, s3 }: {
  s1: number;
  s2: number;
  s3: number;
}): number {
  // Find the area of a triangle given its three sides 's1', 's2', and 's3'.
  const semiPerimeter = (s1 + s2 + s3) / 2;
  return Math.sqrt(
    semiPerimeter *
      (semiPerimeter - s1) *
      (semiPerimeter - s2) *
      (semiPerimeter - s3)
  );
}
