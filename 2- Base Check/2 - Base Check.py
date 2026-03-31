def is_valid_number(n: str, base: int) -> bool:
    valid_chars = "0123456789abcdefghijklmnopqrstuvwxyz"
    allowed = set(valid_chars[:base])
    return all(c.lower() in allowed for c in n)