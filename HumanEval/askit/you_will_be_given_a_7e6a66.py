# Recompilation count: 4
from typing import List
import re

def you_will_be_given_a_7e6a66(s: str) -> List[str]:
    # Replace commas with spaces, then split the string on spaces to create an array of words
    return re.sub(',', ' ', s).split()