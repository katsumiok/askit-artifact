// Recompilation count: 0
export function aHandPaintedWallpaperCosts_6e14ba({}: {}): number {
        // A hand-painted wallpaper costs $400 at the market. A DIY will saves 20% after considering the materials cost. If Ethan made his own hand-painted wallpaper, how much was the total cost?
        const marketPrice: number = 400;  // cost of hand-painted wallpaper at the market
        const savingPercentage: number = 20  // 20% saving with DIY 
        const diyCost: number = marketPrice - (marketPrice * savingPercentage / 100);  // cost with DIY considering the materials cost
        return diyCost;
}
