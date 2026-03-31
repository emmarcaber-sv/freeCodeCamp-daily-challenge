function isValidNumber(n, base) {
    const validChars = "0123456789abcdefghijklmnopqrstuvwxyz".slice(0, base);
    const allowed = new Set(validChars);
    return [...n.toLowerCase()].every(char => allowed.has(char));
}