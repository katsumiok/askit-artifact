# Recompilation count: 0
def a_company_sold_x1_gallons_ef0316(x1) -> int:
    # A company sold'x1'gallons of milk in jars to Mr. Marcellus' store at the cost of $3.5 per gallon. 
    #However, Mr. Marcellus later realized 2/5 of the amount of milk he purchased had passed the expiry date and could not be sold. 
    #He returned the sour milk to the company and ordered a refund. 
    #Calculate how much he got in refunds.

    #calculate the amount of milk that had expired
    expired_milk = (2/5) * x1

    #calculate the amount of refund Mr. Marcellus got
    refund = expired_milk * 3.5
    
    return refund