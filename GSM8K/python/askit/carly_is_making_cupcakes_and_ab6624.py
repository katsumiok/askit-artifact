# Recompilation count: 0
def carly_is_making_cupcakes_and_ab6624(x1) -> int:
    # Carly is making cupcakes and brownies for her art class. She makes 'x1' less than three times as many brownies as cupcakes. If Carly's class has five people and each person gets two treats, how many cupcakes did Carly make?
    # Total treats needed are 5 people * 2 treats = 10
    # Let's assume Carly made c cupcakes, so the total number of brownies will be 3c - x1
    # From the problem, we know that the total (cupcakes + brownies) should be 10, so we can setup the following equation:
    # c + 3c - x1 = 10
    # Solving this equation for cupcakes gives:
    cupcakes = (10 + x1) / 4
    return int(cupcakes)