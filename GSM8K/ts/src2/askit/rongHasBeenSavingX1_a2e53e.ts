// Recompilation count: 0
export function rongHasBeenSavingX1_a2e53e({ x1 }: {
    x1: number;
}): number {
        // Rong has been saving 'x1' coins in his piggy bank every month. Neil has been saving 2/5 times more coins in his piggy bank per month than Rong. How many coins are they having ten years after they started their savings?
        const monthsInTenYears = 10 * 12;

        const rongSavingPerMonth = x1;
        const neilSavingPerMonth = x1 + (2 / 5) * x1;

        const totalRongSaving = rongSavingPerMonth * monthsInTenYears;
        const totalNeilSaving = neilSavingPerMonth * monthsInTenYears;

        return totalRongSaving + totalNeilSaving;
    }

