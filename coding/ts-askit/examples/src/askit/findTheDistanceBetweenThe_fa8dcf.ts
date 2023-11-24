// Recompilation count: 0
export function findTheDistanceBetweenThe_fa8dcf({ p1, p2 }: {
  p1: [
    number,
    number
  ];
  p2: [
    number,
    number
  ];
}): number {
  // Find the distance between the points 'p1' and 'p2'
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(dx ** 2 + dy ** 2);
  return distance;
}
