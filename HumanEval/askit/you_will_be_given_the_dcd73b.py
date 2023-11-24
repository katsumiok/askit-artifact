# Recompilation count: 0
from typing import List

def you_will_be_given_the_dcd73b(class_name: str, extensions: List[str]) -> str:

    def get_strength(extension: str) -> int:
        CAP = sum(1 for char in extension if char.isupper())
        SM = sum(1 for char in extension if char.islower())
        return CAP - SM

    strongest_extension = max(extensions, key=get_strength)

    return f'{class_name}.{strongest_extension}'