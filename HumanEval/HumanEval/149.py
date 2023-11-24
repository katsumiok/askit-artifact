from typing import List
from pyaskit import defun_hinted, define_hinted

sorted_list_sum = define_hinted(
    List[str],
    """
    Accepts a list of strings {{lst}},
    deletes the strings that have odd lengths from it,
    and returns the resulted list with a sorted order,
    The list is always a list of strings and not an array of numbers,
    and it may contain duplicates.
    The order of the list is ascending by length of each word, and returned list is sorted by that rule.
    If two words have the same length, sort the list alphabetically.
    The function should return a list of strings in sorted order.
    All words will have the same length.
    """,
    training_examples=[
        {"input": {"lst": ["aa", "a", "aaa"]}, "output": ["aa"]},
        {"input": {"lst": ["ab", "a", "aaa", "cd"]}, "output": ["ab", "cd"]}]
   ).compile(
        test_examples=[
            {"input": {"lst": ["aa", "a", "aaa"]}, "output": ["aa"]},
            {"input": {"lst": ["school", "AI", "asdf", "b"]}, "output": ["AI", "asdf", "school"]},
            {"input": {"lst": ["d", "b", "c", "a"]}, "output": []},
            {"input": {"lst": ["d", "dcba", "abcd", "a"]}, "output": ["abcd", "dcba"]},
            {"input": {"lst": ["AI", "ai", "au"]}, "output": ["AI", "ai", "au"]},
            {"input": {"lst": ["a", "b", "b", "c", "c", "a"]}, "output": []},
            {"input": {"lst": ['aaaa', 'bbbb', 'dd', 'cc']}, "output": ["cc", "dd", "aaaa", "bbbb"]}]
    )
