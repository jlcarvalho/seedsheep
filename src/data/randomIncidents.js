const DEFAULT_MIN_DAMAGE = 8;
const DEFAULT_MAX_DAMAGE = 25;

// TODO: Pensar numa forma melhor de implementar essa função
const generateMessage = (text) => ({
  damage, health, label, type,
}) => {
  if (health === 0) {
    if (type === 'colonists') {
      return `Todos os ${label.toLowerCase()} morreram.`;
    }
    return `O scanner de ${label.toLowerCase()} parou de funcionar.`;
  }
  return text.replace('[[damage]]', damage);
};

export default [
  {
    description: 'Chuva de meteoros no caminho. Atmosfera ou temperatura.',
    choices: [
      {
        description: 'Manter curso',
        target: 'scanners.atmosphere',
        minDamage: DEFAULT_MIN_DAMAGE,
        maxDamage: DEFAULT_MAX_DAMAGE,
        message: generateMessage('O scanner de atmosfera foi danificado em [[damage]]%.'),
      },
      {
        description: 'Girar a nave',
        target: 'scanners.temperature',
        minDamage: DEFAULT_MIN_DAMAGE,
        maxDamage: DEFAULT_MAX_DAMAGE,
        message: generateMessage('O scanner de temperatura foi danificado em [[damage]]%.'),
      },
    ],
  },
  {
    description: 'Atmosfera ou gravidade.',
    choices: [
      {
        description: 'Diminuir potência',
        target: 'scanners.atmosphere',
        minDamage: DEFAULT_MIN_DAMAGE,
        maxDamage: DEFAULT_MAX_DAMAGE,
        message: generateMessage('O scanner de atmosfera foi danificado em [[damage]]%.'),
      },
      {
        description: 'Não fazer nada',
        target: 'scanners.gravity',
        minDamage: DEFAULT_MIN_DAMAGE,
        maxDamage: DEFAULT_MAX_DAMAGE,
        message: generateMessage('O scanner de gravidade foi danificado em [[damage]]%.'),
      },
    ],
  },
  {
    description: 'Água ou gravidade.',
    choices: [
      {
        description: 'Diminuir potência',
        target: 'scanners.water',
        minDamage: DEFAULT_MIN_DAMAGE,
        maxDamage: DEFAULT_MAX_DAMAGE,
        message: generateMessage('O scanner de água foi danificado em [[damage]]%.'),
      },
      {
        description: 'Não fazer nada',
        target: 'scanners.gravity',
        minDamage: DEFAULT_MIN_DAMAGE,
        maxDamage: DEFAULT_MAX_DAMAGE,
        message: generateMessage('O scanner de gravidade foi danificado em [[damage]]%.'),
      },
    ],
  },
  {
    description: 'Colonizadores ou gravidade.',
    choices: [
      {
        description: 'Diminuir potência',
        target: 'colonists',
        minDamage: DEFAULT_MIN_DAMAGE,
        maxDamage: DEFAULT_MAX_DAMAGE * 10,
        message: generateMessage('[[damage]] colonizadores morreram.'),
      },
      {
        description: 'Não fazer nada',
        target: 'scanners.gravity',
        minDamage: DEFAULT_MIN_DAMAGE,
        maxDamage: DEFAULT_MAX_DAMAGE,
        message: generateMessage('O scanner de gravidade foi danificado em [[damage]]%.'),
      },
    ],
  },
  {
    description: 'Sistema de construção ou gravidade.',
    choices: [
      {
        description: 'Construção',
        target: 'systems.construction',
        minDamage: DEFAULT_MIN_DAMAGE,
        maxDamage: DEFAULT_MAX_DAMAGE,
        message: generateMessage('O sistema de construção foi danificado em [[damage]]%.'),
      },
      {
        description: 'Não fazer nada',
        target: 'scanners.gravity',
        minDamage: DEFAULT_MIN_DAMAGE,
        maxDamage: DEFAULT_MAX_DAMAGE,
        message: generateMessage('O scanner de gravidade foi danificado em [[damage]]%.'),
      },
    ],
  },
];
