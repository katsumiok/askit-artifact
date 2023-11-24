// Recompilation count: 0
export function hannahSlipsOnABanana_c1fc1c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Hannah slips on a banana peel and breaks her arm. The doctor charges her $200 for the cast, $300/hour for a 30-minute visit, $4/pill for 'x1' painkillers, and $6/hour for a mandatory minimum of 'x2' hours of parking. How much does the doctor's visit cost total?
    const costForCast = 200;
    const costForDoctorVisit = 300 / 2; // because the visit is 30 minutes
    const costForPainkillers = 4 * x1;
    const costForParking = 6 * x2;

    const totalCost = costForCast + costForDoctorVisit + costForPainkillers + costForParking;
    return totalCost;
}
