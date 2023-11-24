# Recompilation count: 0
def in_a_dance_class_of_258716(x1) -> int:
    # First find the number of students who enrolled in contemporary dance 
    contemporary_students = x1 * 0.20

    # Then subtract the number of contemporary students from the total number of students to find the remaining students
    remaining_students = x1 - contemporary_students

    # Then find the number of students who enrolled in jazz dance 
    jazz_students = remaining_students * 0.25

    # Then subtract the number of jazz students from the remaining students to find the number of students who enrolled in hip-hop
    hip_hop_students = remaining_students - jazz_students

    # Then divide the number of hip-hop students by the total number of students and multiply by 100 to find the percentage who enrolled in hip-hop
    hip_hop_percentage = (hip_hop_students / x1) * 100

    return int(hip_hop_percentage)