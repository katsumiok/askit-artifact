// Recompilation count: 0
export function jamesBuysARingFor_ca6e79({}: {}): number {
    const diamondCost: number = 600;
    const goldCost: number = 300;
    const costBeforePremium: number = diamondCost + goldCost;

    const premiumRate: number = 0.3;
    const premium: number = costBeforePremium * premiumRate;

    const totalCost: number = costBeforePremium + premium;

    return totalCost;
}
