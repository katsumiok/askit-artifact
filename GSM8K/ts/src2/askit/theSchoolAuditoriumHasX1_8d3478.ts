// Recompilation count: 0
export function theSchoolAuditoriumHasX1_8d3478({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // The school auditorium has 'x1' rows of seats. There are 'x2' seats in each row.
    let totalSeats: number = x1 * x2;

    // One-fourth of the seats were occupied by the administrators
    let adminSeats: number = totalSeats / 4;
    let remainingSeats: number = totalSeats - adminSeats;

    // One-third of the remaining seats were occupied by the parents
    let parentSeats: number = remainingSeats / 3;

    // and the rest were occupied by the students. How many students were there in the school auditorium?
    let studentSeats: number = remainingSeats - parentSeats;

    return studentSeats;
}
