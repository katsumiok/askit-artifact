// Recompilation count: 0
export function charlotteWentIntoTheKitchen_6069d9({ x1 }: {
    x1: number;
}): number {
        // Charlotte went into the kitchen supply store knowing she wanted a set of pot and pans for $120.00, a set of mixing bowls for $20.00 and 'x1' separate utensils at $5.00 each.  At check out, the clerk told her everything was 20% off.  How much was her order?

        // Calculate the total cost without any discount.
        const totalCost = 120 + 20 + (x1 * 5);

        // Apply a 20% discount.
        const discountedCost = totalCost - (totalCost * 0.2);

        // Return the final cost.
        return discountedCost;
    }
