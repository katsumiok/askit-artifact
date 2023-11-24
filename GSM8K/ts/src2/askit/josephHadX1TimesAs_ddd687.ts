// Recompilation count: 0
export function josephHadX1TimesAs_ddd687({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Joseph had 'x1' times as many notebooks as Martha. Martha decided she needed more notebooks 
  // and then bought 'x2' more for a total of 'x3' notebooks. 
  // How many more than Joseph does she now have?

  // Calculate the number of notebooks Martha had at first.
  const marthaInitialNotebooks = x3 - x2;
  // Calculate the number of notebooks Joseph had at first.
  const josephNotebooks = marthaInitialNotebooks * x1;
  // Calculate the number of notebooks Martha has more than Joseph after buying more
  const moreThanJoseph = x3 - josephNotebooks;
  
  return moreThanJoseph;
}
