// Recompilation count: 0
export function carolSpendsX1HoursWriting_cf35f6({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Carol spends 'x1' hours writing a song, half that much time recording it, and 'x2' minutes editing it. What percentage of her total work time did she spend editing?
  
  let totalTime = x1 + (x1 / 2) + (x2 / 60); // total time in hours
  let percentEditing = (x2 / 60) / totalTime * 100; // percentage of time editing

  return percentEditing;
}
