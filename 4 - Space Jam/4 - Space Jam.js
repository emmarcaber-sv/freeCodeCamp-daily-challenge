function spaceJam(s) {
  const cleanedString = s.replace(/\s+/g, '').trim().toUpperCase().split("");
  return cleanedString.join("  ");
}