export default {
  atmosphere: [
    {
      name: 'Atmosfera tóxica',
      planetNames: ['Pequim'],
      quality: 'bad',
      finale: (value) => `A atmosfera extremamente tóxica do planeta faz com que os colonizadores precisem usar trajes espaciais o tempo todo, mas devido a falhas em alguns trajes ${value} colonizadores morreram durante o processo de colonização.`,
    },
    {
      name: 'Atmosfera rarefeita',
      planetNames: ['Everest'],
      quality: 'mediocre',
      finale: () => 'A atmosfera rarefeita do planeta permite que os colonizadores bla bla bla bla...',
    },
    {
      name: 'Atmosfera respirável',
      planetNames: ['Terra 1.5'],
      quality: 'good',
      finale: () => 'Com atmosfera semelhante a do planeta terra, permite que os colonizadores bla bla bla bla...',
    },
  ],

  gravity: [
    {
      name: 'Gravidade que nem da terra',
      planetNames: [],
      quality: 'good',
      finale: () => 'A gravidade pi pi pi po po po.',
    },
  ],

  temperature: [
    {
      name: 'Temperatura fria da porra',
      planetNames: ['Iceball'],
      quality: 'bad',
      finale: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Quente pra desgraça',
      planetNames: ['Inferno'],
      quality: 'bad',
      finale: () => 'In ut urna felis. Nulla dapibus nec ante ac volutpat.',
    },
    {
      name: 'Frio',
      planetNames: ['Curitiba'],
      quality: 'mediocre',
      finale: () => 'Fusce sit amet sem lectus. Sed consequat ut justo sit amet accumsan.',
    },
    {
      name: 'Quente',
      planetNames: ['Goiânia'],
      quality: 'mediocre',
      finale: () => 'Etiam accumsan accumsan justo et tincidunt.',
    },
    {
      name: 'Clima moderado',
      planetNames: [],
      quality: 'good',
      finale: () => 'Duis lacinia auctor vestibulum. Proin hendrerit in ipsum in rutrum.',
    },
  ],

  water: [
    {
      name: 'Água abundante',
      planetNames: ['Waterworld', 'Blueball'],
      quality: 'good',
      finale: () => 'A água pi pi pi po po po.',
    },
    {
      name: 'Sem traços de água',
      planetNames: [],
      quality: 'bad',
      finale: () => 'A água pi pi pi po po po.',
    },
  ],

  vegetation: [
    {
      name: 'Rico em gramíneas',
      planetNames: ['Pasto'],
      quality: 'good',
      finale: () => 'Os metais pi pi pi po po po.',
    },
    {
      name: 'Predominantemente desértico',
      planetNames: ['Saara'],
      quality: 'bad',
      finale: () => 'Os recursos naturais pi pi pi po po po.',
    },
  ],

};
