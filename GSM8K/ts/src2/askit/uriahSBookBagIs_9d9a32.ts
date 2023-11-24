// Recompilation count: 0
export function uriahSBookBagIs_9d9a32({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Uriah's book bag is getting too heavy for him. He needs to remove 'x1' pounds from it. 
    // His comic books weigh 1/4 pound each and his toys weigh 1/2 pound each. 
    // If he removes 'x2' comic books, how many toys does he need to remove?
  
   // the weight that the comic books removed will reduce
    const comicBooksWeight = x2 * (1/4);

    // the remaining weight to remove
    const remainingWeight = x1 - comicBooksWeight;

    // calculate the amount of toys to remove to achieve the remaining weight (since each toy weighs 1/2 pounds)
    const amountOfToysToRemove = remainingWeight / (1/2);

    return amountOfToysToRemove;
}
