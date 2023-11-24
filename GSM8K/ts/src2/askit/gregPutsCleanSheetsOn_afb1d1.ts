// Recompilation count: 0
export function gregPutsCleanSheetsOn_afb1d1({ x1, x2, x3, x4 }: {
  x1: number;
  x2: number;
  x3: number;
  x4: number;
}): number {
    // Greg puts clean sheets on 'x1' twin beds and 'x2' king size bed every week.  
    // His laundry machine will only allow him to wash 'x3' twin sets of sheets at a time and 'x4' king set of sheets at a time.  
    // How many loads of laundry does he do in a year?

    let twinBedLoadsPerWeek = Math.ceil(x1 / x3);
    let kingBedLoadsPerWeek = Math.ceil(x2 / x4);

    let totalLoadsPerWeek = twinBedLoadsPerWeek + kingBedLoadsPerWeek;

    // Assuming a year has approximately 52 weeks
    let totalLoadsPerYear = totalLoadsPerWeek * 52; 

    return totalLoadsPerYear;
}
