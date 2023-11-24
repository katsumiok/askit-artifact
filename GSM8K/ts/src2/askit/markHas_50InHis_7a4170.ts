// Recompilation count: 0
export function markHas_50InHis_7a4170({}: {}): number {
        // Mark has $50 in his bank account. He earns $10 per day at his work. If he wants to buy a bike that costs $300, how many days does Mark have to save his money?
        let currentMoney : number = 50;
        let earnPerDay : number = 10;
        let bikeCost : number = 300;
        let days : number = (bikeCost - currentMoney)/earnPerDay;
        return days;
    }
