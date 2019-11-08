const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (hillSize !== "normal" && hillSize !== "big" && hillSize !== "mammoth")
    return "error";

  let points = 60;
  let poinstPerMeter = 2;
  if (hillSize == "big") poinstPerMeter = 1.8;
  if (hillSize == "mammoth") {
    points = 120;
    poinstPerMeter = 1.2;
  }
  pointsForDistance = (distance - kPoint) * poinstPerMeter;
  return points + pointsForDistance;
};

module.exports = calculateDistancePoints;
