# Recompilation count: 0

def matthew_has_a_collection_of_02a1fd(x1) -> int:
    # Matthew has a collection of'x1'unique toy soldiers.
    # He wants to sell them for a fair price.
    # He found a buyer who is willing to pay for half his collection $5 per toy, and for the other half $7 per toy.
    # If Matthew would agree to that offer, how much money would he earn?
    
    # calculate the number of toys in each half
    half = x1 // 2
    
    # calculate the earnings from the first half
    first_half_earnings = half * 5
    
    # calculate the earnings from the other half
    second_half_earnings = half * 7
    
    # the total earnings would be the sum of the first half earnings and the second half earnings
    total_earnings = first_half_earnings + second_half_earnings
    
    # check if there is a remaining toy in the collection
    # if the collection is odd then the remaining toy would be considered as part of the second half
    if x1 % 2 == 1:
        total_earnings += 7

    return total_earnings