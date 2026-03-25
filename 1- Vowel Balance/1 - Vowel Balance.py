def is_balanced(s):
    vowels = set('aeiouAEIOU')
    half = len(s) // 2
    return sum(c in vowels for c in s[:half]) == sum(c in vowels for c in s[-half:])