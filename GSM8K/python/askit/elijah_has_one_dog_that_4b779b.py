# Recompilation count: 0
def elijah_has_one_dog_that_4b779b(x1) -> int:
    # Elijah has one dog that is one-fourth the weight of Kory’s dog and another dog that is half the weight of Kory’s dog. If Kory’s dog is'x1'pounds, how much do Elijah and Kory’s dogs weigh altogether, in pounds?
    dog1 = x1 / 4  # Elijah's first dog
    dog2 = x1 / 2  # Elijah's second dog
    total_weight = x1 + dog1 + dog2  # Adding the weight of all dogs 
    return int(total_weight)