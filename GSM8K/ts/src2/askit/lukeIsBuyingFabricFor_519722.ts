// Recompilation count: 0
export function lukeIsBuyingFabricFor_519722({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Luke is buying fabric for new curtains. There are five windows. Each window is 'x1' inches wide and Luke needs to buy fabric equal to 'x2' times the total width of the windows. 
        // Total width of windows
        const totalWindowWidth = x1 * 5; // As there are 5 windows
        // Total fabric Luke needs to buy
        const fabricNeeded = totalWindowWidth * x2; // As per the requirement
        return fabricNeeded;
    }
