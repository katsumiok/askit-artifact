# Recompilation count: 0
def charlie_has_three_times_as_73d8de(x1) -> int:
    # Charlie has three times as many Facebook friends as Dorothy. 
    # James has four times as many friends on Facebook as Dorothy. 
    # If Charlie has'x1'friends on Facebook, how many Facebook friends does James have?
    dorothy_friends = x1 // 3  # As Charlie has three times as many Facebook friends as Dorothy, so we divide Charlie's friends by three to get Dorothy's friends
    james_friends = dorothy_friends * 4  # James has four times as many friends on Facebook as Dorothy
    return james_friends