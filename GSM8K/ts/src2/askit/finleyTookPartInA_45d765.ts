// Recompilation count: 0
export function finleyTookPartInA_45d765({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Finley started in first place, we can represent this as 1.
  let position = 1; 
  
  // She then fell back 'x1' spots, so we add 'x1' to her position.
  position += x1; 

  // She moved ahead 'x2' spots, which means we subtract 'x2' from her position.
  position -= x2; 

  // She fell back 3 spots, we add 3 to her position.
  position += 3; 

  // Lastly, she jumped ahead 'x3' spot, which means we subtract 'x3' from her position.
  position -= x3;
  
  // return final position
  return position; 
}
