// Recompilation count: 0
export function bufordWritesManyChecksEvery_a14ac8({}: {}): number {
    // Buford writes many checks every year.  Once per month he writes a check to pay the electric bill.  
    // He also writes a check every month for the gas bill.  Twice per month he writes a check to the church.  
    // And quarterly, he writes a check to the pest and lawn service.  How many checks does Buford write per year?

    // Defining how many checks Buford writes each month
    let monthlyChecks = 1 // For electric bill
    monthlyChecks += 1 // For gas bill
    monthlyChecks += 2 // For the church

    // Defining how many checks Buford writes each quarter
    let quarterlyChecks = 1 // For pest and lawn service

    // There are 12 months in a year
    let totalChecks = monthlyChecks * 12

    // There are 4 quarters in a year
    totalChecks += quarterlyChecks * 4

    return totalChecks;
}
