def fibonacci_sequence(start_sequence, length):
    start, end = start_sequence
    final_sequence = start_sequence[:]

    if length == 0: return []
    if length == 1: return [start]
    if length == 2: return final_sequence
    
    for i in range(2, length):
        temp = start + end
        start, end = end, temp
        final_sequence.append(temp)
    
    return final_sequence