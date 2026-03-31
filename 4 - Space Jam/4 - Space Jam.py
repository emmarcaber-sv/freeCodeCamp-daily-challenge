import re

def space_jam(s):
    cleaned_string = list(s.replace(' ', '').upper())
    return "  ".join(cleaned_string)