// Recompilation count: 0
export function jimIsMakingAComforter_7450d4({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Jim is making a comforter for his king-sized bed. He needs two pieces of fabric that are 'x1' feet longer and 'x2' feet wider than the bed,
        // which measures 'x3' feet long by 'x4' feet wide. How many square feet of fabric does Jim need to buy?
      
      // calculate dimensions of the fabric piece
      const length = x3 + x1;
      const width = x4 + x2;
      
      // calculate area of a single piece
      const areaOfSinglePiece = length * width;
      
      // since he needs two pieces, multiply the area by 2
      const totalArea = areaOfSinglePiece * 2;
      
      return totalArea;
}
