// Recompilation count: 0
export function appleHighSchoolIsHolding_0304af({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Apple High School is holding graduation in their Fine Arts Center this year which has space for 'x1' people.  After accounting for 'x2' seats for graduates and 'x3' seats for faculty attending, how many tickets would each graduate receive to give to their friends and family if the tickets are split equally?
    let totalSeats = x1;
    let seatsForGraduates = x2;
    let seatsForFaculty = x3;

    let seatsLeft = totalSeats - seatsForGraduates - seatsForFaculty; 

    if (seatsLeft < 0) {
      throw new Error("The provided numbers have more people than seats. Impossible to distribute tickets.")
    } 
    
    let ticketsPerGraduate = seatsLeft / seatsForGraduates;

    return Math.floor(ticketsPerGraduate);
}
