from typing import List
from pyaskit import defun_hinted, define_hinted

numerical_letter_grade = defun_hinted(
    List[str],
    {'grades': List[float]},
    """Given a list of GPAs for some students {{grades}}, this function outputs a list of letter grades using the following table:
             GPA       |    Letter grade
              4.0                A+
            > 3.7                A 
            > 3.3                A- 
            > 3.0                B+
            > 2.7                B 
            > 2.3                B-
            > 2.0                C+
            > 1.7                C
            > 1.3                C-
            > 1.0                D+ 
            > 0.7                D 
            > 0.0                D-
              0.0                E
    """,
    training_examples=[
        {"input": {"grades": [4.0, 3, 1.7, 2, 3.5]}, "output": ['A+', 'B', 'C-', 'C', 'A-']}]
    ).compile(
        test_examples=[
            {"input": {"grades": [1.2]}, "output": ['D+']},
            {"input": {"grades": [0.5]}, "output": ['D-']},
            {"input": {"grades": [0.0]}, "output": ['E']},
            {"input": {"grades": [1, 0.3, 1.5, 2.8, 3.3]}, "output": ['D', 'D-', 'C-', 'B', 'B+']},
            {"input": {"grades": [0, 0.7]}, "output": ['E', 'D-']}]
    )
