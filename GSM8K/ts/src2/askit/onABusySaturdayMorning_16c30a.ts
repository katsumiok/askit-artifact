// Recompilation count: 3
export function onABusySaturdayMorning_16c30a({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // On a busy Saturday morning, a hotel was completely booked with 'x1' guests.
        let totalGuests = x1; 

        // 'x2' guests elected an early checkout
        totalGuests -= x2; 

        // 'x3' elected for a late checkout.
        totalGuests -= x3; 

        // In the afternoon twice as many people checked in as those who opted for a late checkout.
        totalGuests += 2 * x3;

        // 'x4' more people checked in after dinner was served.
        totalGuests += x4;

        // How many guests does the hotel now have?
        return totalGuests;
    }

