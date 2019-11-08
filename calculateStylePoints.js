const calculateStylePoints = styleNotes => {
  if (!Array.isArray(styleNotes) || styleNotes.length !== 5) return "error";
  return styleNotes
    .sort()
    .slice(1, 4)
    .reduce((a, b) => a + b, 0);
};

module.exports = calculateStylePoints;
