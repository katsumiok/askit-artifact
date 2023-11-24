// Recompilation count: 0
export function inACertainSchoolTwo_4fe3bc({ x1 }: {
    x1: number;
}): number {
        // In a certain school, two classes have a total of 'x1' students. Each class has the same amount of students, and in each class 40% of the students are girls. How many boys are in each class?
        let studentsPerClass = x1 / 2;
        let girlsPerClass = studentsPerClass * 0.4;
        let boysPerClass = studentsPerClass - girlsPerClass;

        return boysPerClass;
    }
