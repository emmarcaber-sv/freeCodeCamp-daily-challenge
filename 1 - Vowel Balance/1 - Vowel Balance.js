function isBalanced(s) {
    const length = s.length;
    const half = Math.floor(length / 2);

    return counter(0, half, s) === counter(length - half, length, s);
}

function counter(start, end, string) {
    let count = 0;
    const vowels = 'aeiouAEIOU';

    for (let i = start; i < end; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }

    return count;
}