export const getRandomNumberBetween = (min, max) =>
  Math.floor(Math.random() * max) + min;

export const getColorFromQuality = (quality) => ({
  bad: "red",
  mediocre: "orange",
  good: "green",
  "not-identified": "darkred",
}[quality]);

export const getScoreFromQuality = (quality) => ({
  bad: 0,
  mediocre: 250,
  good: 500,
}[quality]);