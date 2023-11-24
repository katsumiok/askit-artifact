# Recompilation count: 0
def emma_can_make_and_upload_dfbad0(x1, x2, x3, x4, x5) -> int:
    # Emma can make and upload'x1'vlogs per month. But she was only able to make'x2'vlogs for the first week,'x3'vlogs for the second week, and'x4'vlogs for the third week. How many vlogs should she do to complete the'x5'vlogs per month?
    
    total_vlogs_made = x2 + x3 + x4
    
    vlogs_needed = x5 - total_vlogs_made
    
    return vlogs_needed