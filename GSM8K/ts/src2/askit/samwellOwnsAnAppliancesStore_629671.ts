// Recompilation count: 0
export function samwellOwnsAnAppliancesStore_629671({ x1 }: {
    x1: number;
}): number {
        // Samwell owns an appliances store. For this week, one-fourth of their sales are smart TVs, one-eighth are analog TVs, and the rest are OLED TVs. If they were able to sell a total of 'x1' TVs, how many OLED TVs were they able to sell?
        
        const smartTvPercentage = 1 / 4;
        const analogTvPercentage = 1 / 8;
        const smartAndAnalogTvCount = (smartTvPercentage + analogTvPercentage) * x1;
        const oledTvCount = x1 - smartAndAnalogTvCount;
        
        return oledTvCount;
    }
