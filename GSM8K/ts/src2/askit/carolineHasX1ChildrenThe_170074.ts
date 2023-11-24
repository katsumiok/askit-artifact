// Recompilation count: 0
export function carolineHasX1ChildrenThe_170074({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Convert the height of the first child from feet to inches
    let firstChildHeightInches = x2 * 12;
  
    // Calculate the height of the second child
    let secondChildHeightInches = firstChildHeightInches + 2;
  
    // Calculate the height of the third child
    let thirdChildHeightInches = secondChildHeightInches - x3;
  
    // Calculate the height of the fourth child
    let fourthChildHeightInches = thirdChildHeightInches + 3;
  
    return fourthChildHeightInches;
}
