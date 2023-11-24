# Recompilation count: 0
def jennifer_s_dog_has_x1_65607b(x1, x2, x3, x4) -> int:
    # Jennifer's dog has'x1'puppies,'x2'of which have spots.
    # Brandon's dog has'x3'puppies,'x4'of which have spots.
    # What percentage of all the puppies have spots?

    # Total number of puppies
    total_puppies = x1 + x3
    
    # Total number of puppies with spots
    total_spotted_puppies = x2 + x4
    
    # calculate the percentage of puppies that have spots
    percentage_spotted = (total_spotted_puppies / total_puppies) * 100

    return int(percentage_spotted)