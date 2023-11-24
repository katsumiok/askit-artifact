// Recompilation count: 0
export function betsyAndDonovanMadeA_e166c8({ x1, x2 }: { x1: number; x2: number; }): number {
    // Betsy and Donovan made a meal together.
    // Betsy's part took 'x1' minutes longer than Donovan's part. 
    // The meal was made in 'x2' minutes. How many minutes long was Betsy's part?

    // First, let's find out how long Donovan's part took.
    let donovanPart = (x2 - x1) / 2;

    // Now, since Betsy's part took 'x1' minutes longer, let's add that to Donovan's time.
    let betsyPart = donovanPart + x1;

    return betsyPart;
}
