// Recompilation count: 0
export function anIceCreamTruckIs_5f6085({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number { 
  let numberOfChildren = x1;
  
  // On the second street, each child is joined by another child
  numberOfChildren *= 2;
  
  // On the third street, each child in the existing group is joined by another 'x2' children.
  numberOfChildren += numberOfChildren * x2;

  // The original 'x3' children then give up and leave the group.
  numberOfChildren -= x3;

  return numberOfChildren;
}
