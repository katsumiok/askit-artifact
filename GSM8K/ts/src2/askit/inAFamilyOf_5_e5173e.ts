// Recompilation count: 0
export function inAFamilyOf_5_e5173e({}: {}): number {
        // In a family of 5, three people eat three eggs each day while the rest eat two eggs each day. If they eat eggs every day, how many eggs will the family consume in a week?
        let threeEggEaters = 3;
        let twoEggEaters = 2;
        let eggConsumptionPerDay = (threeEggEaters * 3) + (twoEggEaters * 2);
        let eggConsumptionPerWeek = eggConsumptionPerDay * 7;
        return eggConsumptionPerWeek;
}
