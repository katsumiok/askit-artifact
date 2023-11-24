// Recompilation count: 0
export function aFarmerIsBalingHay_0e14b9({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // A farmer is baling hay in their field. Each hour the farmer makes 'x1' bales. 
        // At the same time, a truck is picking the hay bales up. Each hour the truck picks up 'x2' bales of hay. 
        // If the farmer and the truck driver put in a 'x3' hour day, how many bales of hay are left in the field?
        const balesMade = x1 * x3;
        const balesPickedUp = x2 * x3;
        const balesLeft = balesMade - balesPickedUp;
        return balesLeft;
    }
