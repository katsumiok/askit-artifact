// Recompilation count: 1
export function tiffanyIsMeasuringHowMany_3e1132({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Tiffany is measuring how many surfers can ride a big wave without falling. She sees that when a wave over 'x1' feet arrives, only 25% of the riders can stay upright. Of these riders, 60% are women. If there are 'x2' riders, how many men can stay upright on the wave?

        // First calculate how many riders can stay upright
        let uprightRiders = x2 * 0.25;
        
        // Then calculate how many of these are men
        // (as 60% of these are women, 40% are men)
        let menUprightRiders = uprightRiders * 0.4;

        // Return the number of men who can stay upright rounded down to a whole number
        return Math.floor(menUprightRiders);
    }
