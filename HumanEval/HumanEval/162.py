from typing import Optional
from pyaskit import defun_hinted, define_hinted

string_to_md5 = define_hinted(
    Optional[str], 
    """ Given a string {{text}}, return its md5 hash equivalent string.
    If {{text}} is an empty string, return None. 
    """, 
    training_examples=[
        {"input": {"text": 'Hello world'}, "output": '3e25960a79dbc69b674cd4ec67a72c62'}]
    ).compile(
        test_examples=[
            {"input": {"text": 'Hello world'}, "output": '3e25960a79dbc69b674cd4ec67a72c62'},
            {"input": {"text": ''}, "output": None},
            {"input": {"text": 'A B C'}, "output": '0ef78513b0cb8cef12743f5aeb35f888'},
            {"input": {"text": 'password'}, "output": '5f4dcc3b5aa765d61d8327deb882cf99'}]
    )
