// Recompilation count: 0
export function janetTakesTwoBusTrips_bce9de({}: {}): number {
        // Janet takes two bus trips five days a week. If each bus trip costs her $2.20, how much would she save by buying a weekly bus pass for $20?
        let costPerTrip = 2.2;
        let tripsPerDay = 2;
        let daysPerWeek = 5;
        let weeklyPassCost = 20;
        
        let weeklyCostWithoutPass = costPerTrip * tripsPerDay * daysPerWeek;
        
        let savings = weeklyCostWithoutPass - weeklyPassCost;
        
        return savings;
    }
