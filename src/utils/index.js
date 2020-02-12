export const getRandomNumberBetween = (min, max) => Math.floor(Math.random() * max) + min;

export const getColorFromQuality = (quality) => ({
  bad: 'red',
  mediocre: 'orange',
  good: 'green',
  'not-identified': 'darkred',
}[quality]);

export const getScoreFromQuality = (quality) => ({
  bad: 0,
  mediocre: 250,
  good: 500,
}[quality]);

// TODO: Pensar numa forma melhor de implementar essa função
export const generateMessage = ({
  damage, health, label, type, text,
}) => {
  if (health === 0) {
    if (type === 'colonists') {
      return `Todos os ${label.toLowerCase()} morreram.`;
    }
    return `O scanner de ${label.toLowerCase()} parou de funcionar.`;
  }
  return text.replace('[[damage]]', damage);
};
