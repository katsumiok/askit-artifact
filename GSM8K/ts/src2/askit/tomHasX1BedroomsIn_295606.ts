// Recompilation count: 0
export function tomHasX1BedroomsIn_295606({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // The area of one bedroom
        const bedroomArea = x2 * x3;
        
        // Total area of all bedrooms
        const totalBedroomArea = x1 * bedroomArea;
        
        // The area of the living room
        const livingRoomArea = x4 * bedroomArea;
        
        // Adding up the area of all bedrooms, the living room, and rest of the house
        const totalArea = totalBedroomArea + livingRoomArea + x5;

        return totalArea;
    }

