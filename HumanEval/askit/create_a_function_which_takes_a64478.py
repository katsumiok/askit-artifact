# Recompilation count: 0
def create_a_function_which_takes_a64478(file_name) -> str:
    import re
    
    if re.search(r'\d', file_name) is not None:
        if len(re.findall(r'\d', file_name)) > 3:
            return 'No'
    if file_name.count('.') != 1:
        return 'No'
    parts = file_name.split('.')
    if len(parts[0]) == 0 or not parts[0][0].isalpha():
        return 'No'
    if parts[1] not in ['txt', 'exe', 'dll']:
        return 'No'
    return 'Yes'