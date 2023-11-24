// Recompilation count: 0
export function jasmineSTeacherGivesStickers_0de9ba({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Jasmine's teacher gives stickers as a reward. She was given 'x1' stickers for participating in class, 
  // but she lost 'x2' stickers during playtime. However, her teacher gave her another 'x3' stickers for helping her classmates. 
  // The total number of stickers Jasmine has at the end is the initial amount she received minus the quantity she lost, plus the ones she got for helping.
  return x1 - x2 + x3;
}
