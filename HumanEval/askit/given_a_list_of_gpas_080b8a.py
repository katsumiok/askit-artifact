# Recompilation count: 1
from typing import List


def given_a_list_of_gpas_080b8a(grades: List[float]) -> List[str]:
    letterGrades = []
    for grade in grades:
        if grade >= 4.0:
            letterGrades.append('A+')
        elif grade > 3.7:
            letterGrades.append('A')
        elif grade > 3.3:
            letterGrades.append('A-')
        elif grade > 3.0:
            letterGrades.append('B+')
        elif grade > 2.7:
            letterGrades.append('B')
        elif grade > 2.3:
            letterGrades.append('B-')
        elif grade > 2.0:
            letterGrades.append('C+')
        elif grade > 1.7:
            letterGrades.append('C')
        elif grade > 1.3:
            letterGrades.append('C-')
        elif grade > 1.0:
            letterGrades.append('D+')
        elif grade > 0.7:
            letterGrades.append('D')
        elif grade > 0.0:
            letterGrades.append('D-')
        else:
            letterGrades.append('E')
    return letterGrades