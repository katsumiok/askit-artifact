// Recompilation count: 0
export function aTrainHasX1People_d8c3b0({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
  // A train has 'x1' people traveling on it. 
  // At the first stop 'x2' people get off and 'x3' more people get on, 
  // and at the next stop another 'x4' people get off. How many people are on the train?
  
  return x1 - x2 + x3 - x4;
}
