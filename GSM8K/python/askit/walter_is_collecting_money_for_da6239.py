# Recompilation count: 0
def walter_is_collecting_money_for_da6239() -> int:
    #Walter's neighborhood collection
    neighborhood_collection = 500

    #Walter's online fund
    online_fund = 1500

    #Walter's friend's donation
    friends_donation = 200

    #Total collection before lawyer's contribution
    total_collection = neighborhood_collection + online_fund + friends_donation
    
    #Walter's lawyer is going to contribute three times as much as everyone else
    lawyers_contribution = total_collection * 3

    return lawyers_contribution