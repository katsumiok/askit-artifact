// Recompilation count: 0
export function julieMicahAndMitchellSold_aa38b3({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Julie, Micah, and Mitchell sold 'x1' glasses of lemonade at their lemonade stand. 
  // Julie sold 'x2' glasses and the boys sold an equal number of glasses. 
  // How many more glasses did Julie sell than Micah?
  
  // subtract x2 from total glasses sold (x1), as this amount is sold by Julie
  // the remaining is sold by the boys in equal number. So, divide it by 2 to get the number of glasses that Micah sold.
  let micahSold = (x1 - x2) / 2;
  
  // subtract the number of glasses Micah sold from the number of glasses Julie sold to get the difference
  return x2 - micahSold;
}
