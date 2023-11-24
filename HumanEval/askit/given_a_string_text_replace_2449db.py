# Recompilation count: 1
import re

def given_a_string_text_replace_2449db(text) -> str:
    # Replace all consecutive spaces more than 2 with -
    text = re.sub(' {3,}', '-', text)
    
    # Replace all remaining spaces with _
    text = text.replace(' ', '_')
    
    return text