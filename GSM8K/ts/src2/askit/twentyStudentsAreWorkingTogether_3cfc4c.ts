// Recompilation count: 0
export function twentyStudentsAreWorkingTogether_3cfc4c({}: {}): number {
        // Twenty students are working together to raise money for a charity. Each earns the same amount. 
        // The charity raises a total of $175,000. $50,000 comes from organizations and the rest from the students. 
        // How much did each student raise?

        const total = 175000;    // Total amount raised
        const org_donation = 50000; // Amount from organizations

        // Amount raised by students
        const student_total = total - org_donation;

        // number of students
        const students = 20;

        // Each student raised
        const each_student_raised = student_total / students;

        return each_student_raised;
    }

