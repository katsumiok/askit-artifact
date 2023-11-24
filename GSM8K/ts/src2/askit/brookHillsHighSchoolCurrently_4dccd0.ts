// Recompilation count: 1
export function brookHillsHighSchoolCurrently_4dccd0({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    let total_students = x1;
    let students_over_x2 = total_students / 2;
    let male_students_over_x3 = students_over_x2 / 4;
    let students_under_x4 = total_students / 2;
    let male_students_under_x5 = students_under_x4 / 2;
  
    let total_male_students = male_students_over_x3 + male_students_under_x5;
    let total_female_students = total_students - total_male_students;
  
    return total_female_students;
}
