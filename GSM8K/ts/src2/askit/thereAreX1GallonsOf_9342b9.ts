// Recompilation count: 0
export function thereAreX1GallonsOf_9342b9({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // There are 'x1' gallons of water in a pool. Using a water pump, Anthony and his father fill a tank with half the amount of water in the pool. They use water from the tank to water their vegetable garden. If the tank is emptied at a rate of 'x2' gallons of water per day, how many gallons of water will be remaining in the tank after 'x3' days?
        let tankWater = x1/2; // tank is filled with half the amount of water available
        let remainingWater = tankWater - (x2 * x3); // each day x2 gallons of water are used, so in x3 days it will be x2*x3
        
        return remainingWater > 0 ? remainingWater : 0 ; // if remaining water is less than 0 it means tank is empty so return 0
    }
