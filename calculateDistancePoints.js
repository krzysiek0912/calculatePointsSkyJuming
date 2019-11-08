const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let points = 60;
  let poinstPerMeter = 2;
  if (hillSize == "big") poinstPerMeter = 1.5;
  if (hillSize == "mammoth") {
    points = 120;
    poinstPerMeter = 1.2;
  }
  pointsForDistance = distance - kPoint * poinstPerMeter;
  return points + pointsForDistance;
};

module.exports = calculateDistancePoints;
