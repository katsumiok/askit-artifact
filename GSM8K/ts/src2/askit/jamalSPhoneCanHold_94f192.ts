// Recompilation count: 0
export function jamalSPhoneCanHold_94f192({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Jamal's phone can hold 'x1' times more photographs than can Brittany's phone.  The maximum number of photographs that Brittany's phone can hold is 'x2' times more than the number of birds in Jamal's photograph of the ducks at the zoo.  If Jamal's phone can hold 'x3' photographs, how many ducks can be seen in Jamal's photograph of ducks at the zoo?
        let brittanysPhoneMax = x3 / x1; // Maximum number of photographs Britanny's phone can hold 
        let numberOfDucks = brittanysPhoneMax / x2; // Number of ducks in Jamal's photograph
      
        return numberOfDucks; // Return the number of ducks that can be seen.
    }
