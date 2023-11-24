# Recompilation count: 0
import hashlib
from typing import Union

def given_a_string_text_return_851bbb(text: str) -> Union[str, None]:
    #  Given a string 'text', return its md5 hash equivalent string.
    #  If 'text' is an empty string, return None. 
    
    if text == "":
        return None
        
    # encode the text to use it in the md5 function
    text = text.encode()
    
    # creating the md5 object and hashing the text
    md5_object = hashlib.md5(text)
    
    # return the hexadecimal representation of the hashed text
    return md5_object.hexdigest()

print(given_a_string_text_return_851bbb(**{'text': 'Hello world'})) 
# Output: '3e25960a79dbc69b674cd4ec67a72c62'