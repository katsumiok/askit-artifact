// Recompilation count: 3
export function aTeacherUsesA_5_9c41b3({ x1 }: {
    x1: number;
}): number {
  // On Monday the teacher uses 45% of the chalk, so 55% of the chalk remains.
  let remainingChalk = 5 * 0.55;

  // Subtract the amount of chalk the teacher uses each subsequent day (20%) until it drops below 'x1' inches.
  let days = 0;
  while(remainingChalk >= x1) {
    days++;
    remainingChalk -= remainingChalk * 0.20;
  }

  return days;
}
