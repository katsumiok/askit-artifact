// Recompilation count: 0
export function finleyWentToTheGrocery_43fb4e({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Finley went to the grocery store and bought rice, beans, and pork for use in their home. It took her 'x1' more minutes to cook pork than rice, while beans took half the combined cooking time of pork and rice. If it took her 'x2' minutes to cook rice, how long in minutes did it take to cook all the food?

    // cooking time for pork
    let porkCookingTime = x2 + x1;
    // cooking time for beans
    let beansCookingTime = 0.5 * (porkCookingTime + x2);
  
    // total cooking time for all foods
    return porkCookingTime + beansCookingTime + x2;
}
