// Recompilation count: 0
export function jeansMakeupArtistChargesHer_256763({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Calculate the total charge without discount
        let totalCharge = x1 * x2 * x3 * 250;

        // Calculate the discount
        let discount = totalCharge * 0.10;

        // Subtract discount from total charge
        let finalCharge = totalCharge - discount;

        // Return the final charge
        return finalCharge;
    }
