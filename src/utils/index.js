export const getRandomItem = items =>
  items[Math.floor(Math.random() * items.length)];

export const getRandomNumberBetween = (min, max) =>
  Math.floor(Math.random() * max) + min;
