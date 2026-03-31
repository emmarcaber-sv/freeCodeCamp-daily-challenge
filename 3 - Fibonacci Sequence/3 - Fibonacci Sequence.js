function fibonacciSequence(startSequence, length) {
  let [start, end] = startSequence;

  if (length === 0) return []
  if (length === 1) return [start]
  if (length === 2) return startSequence

  let finalSequence = [...startSequence]
  for (let i = 2; i < length; i++) {
    let temp = start + end;
    start = end;
    end = temp;
    finalSequence[i] = temp;
  }

  return finalSequence;
}

console.log(fibonacciSequence([0, 1], 20))