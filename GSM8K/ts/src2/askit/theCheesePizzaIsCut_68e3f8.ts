// Recompilation count: 0
export function theCheesePizzaIsCut_68e3f8({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // The cheese pizza is cut into 'x1' slices and the pepperoni pizza is cut into 'x2' slices.  
    // If Kate’s 'x3' friends each eat 'x4' cheese pizza slices and 'x5' pepperoni pizza slices, 
    // how many pizza pies does she need to buy?
    let totalCheeseSlicesNeeded = x3 * x4;
    let totalPepperoniSlicesNeeded = x3 * x5;
    
    let cheesePizzasNeeded = Math.ceil(totalCheeseSlicesNeeded / x1);
    let pepperoniPizzasNeeded = Math.ceil(totalPepperoniSlicesNeeded / x2);
    
    return cheesePizzasNeeded + pepperoniPizzasNeeded;
}
