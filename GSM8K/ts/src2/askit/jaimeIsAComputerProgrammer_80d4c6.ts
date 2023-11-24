// Recompilation count: 0
export function jaimeIsAComputerProgrammer_80d4c6({ x1 }: {
    x1: number;
}): number {
    // Junior programmers are 2/5 of the total employees.
    let numberOfJuniorProgrammers = (2 / 5) * x1;

    // Calculate the number of senior programmers. They are the difference of the total employees and junior programmers.
    let numberOfSeniorProgrammers = x1 - numberOfJuniorProgrammers;

    // Calculating the total salary for junior programmers and senior programmers.
    let juniorProgrammersSalary = numberOfJuniorProgrammers * 2000;
    let seniorProgrammersSalary = numberOfSeniorProgrammers * (2000 + 400); // Since, Senior programmers are paid $400 more than junior programmers.

    // Returning the sum of both junior and senior programmers salaries which shows the total amount that company pays.

    return juniorProgrammersSalary + seniorProgrammersSalary;
}
