// Recompilation count: 0
export function peterHas_70AndWishes_6db2ad({}: {}): number {
    // Peter has $70 and wishes to spend an equal amount each day for one week. 
    // From Sunday through Wednesday, he spent his money on wooden action figures which cost $5 each. 
    // For the rest of the week, he will buy plastic action figures which cost $2 each. 
    // How many total action figures will he have by the end of the week?

    let totalMoney = 70;
    const woodenAFPrice = 5;
    const woodenDays = 4;
    const plasticAFPrice = 2;
    const plasticDays = 3;

    let dailySpend = totalMoney / 7;
    let weeklyWoodenAFs = Math.floor(dailySpend * woodenDays / woodenAFPrice);
    let weeklyPlasticAFs = Math.floor(dailySpend * plasticDays / plasticAFPrice);

    let totalActionFigures = weeklyWoodenAFs + weeklyPlasticAFs;

    return totalActionFigures;
}
