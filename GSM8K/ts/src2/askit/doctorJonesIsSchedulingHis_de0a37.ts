// Recompilation count: 0
export function doctorJonesIsSchedulingHis_de0a37({ x1 }: {
    x1: number;
}): number {
    // convert everything to minutes for easier calculation
    const totalWorkMinutes = 9 * 60;
    const roundTimePerInpatient = 20;
    const appointmentPerPatient = 30;
    const totalInpatients = x1;
    const totalAppointments = 10;

    const totalRoundsTime = roundTimePerInpatient * totalInpatients;
    const totalAppointmentsTime = appointmentPerPatient * totalAppointments;

    const recordsTime = totalWorkMinutes - totalRoundsTime - totalAppointmentsTime;
    // convert the remaining time back to hours for the final result
    return recordsTime / 60;
}
