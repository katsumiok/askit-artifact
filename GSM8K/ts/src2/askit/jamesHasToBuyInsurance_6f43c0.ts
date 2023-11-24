// Recompilation count: 0
export function jamesHasToBuyInsurance_6f43c0({}: {}): number {
    // James has to buy insurance.  Since he had an accident it was 60% more than normal.  The normal cost is $120 a month.  How much does he pay a year?
    const normalInsuranceCostPerMonth: number = 120;
    const numberOfMonthsInYear: number = 12;
    const accidentPremiumIncreasePercentage: number = 0.60;

    const accidentInsuranceCostPerMonth = normalInsuranceCostPerMonth * (1 + accidentPremiumIncreasePercentage);
    const annualInsuranceCost = accidentInsuranceCostPerMonth * numberOfMonthsInYear

    return annualInsuranceCost;
}
