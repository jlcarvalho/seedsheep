export default {
  atmosphere: [
    {
      name: "Atmosfera tóxica",
      planetNames: ["Pequim"],
      quality: "bad",
      finale: value =>
        `A atmosfera extremamente tóxica do planeta faz com que os colonizadores precisem usar trajes espaciais o tempo todo, mas devido a falhas em alguns trajes ${value} colonizadores morreram durante o processo de colonização.`
    },
    {
      name: "Atmosfera rarefeita",
      planetNames: ["Everest"],
      quality: "mediocre",
      finale: value =>
        `A atmosfera rarefeita do planeta permite que os colonizadores bla bla bla bla...`
    },
    {
      name: "Atmosfera respirável",
      planetNames: ["Terra 1.5"],
      quality: "good",
      finale: value =>
        `Com atmosfera semelhante a do planeta terra, permite que os colonizadores bla bla bla bla...`
    }
  ],

  gravity: [
    {
      name: "Gravidade que nem da terra",
      planetNames: [],
      quality: "good",
      finale: value => `A gravidade pi pi pi po po po.`
    }
  ],

  temperature: [
    {
      name: "Temperatura fria da porra",
      planetNames: ["Iceball"],
      quality: "bad",
      finale: value =>
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
      name: "Quente pra desgraça",
      planetNames: ["Inferno"],
      quality: "bad",
      finale: value => `In ut urna felis. Nulla dapibus nec ante ac volutpat.`
    },
    {
      name: "Frio",
      planetNames: ["Curitiba"],
      quality: "mediocre",
      finale: value =>
        `Fusce sit amet sem lectus. Sed consequat ut justo sit amet accumsan.`
    },
    {
      name: "Quente",
      planetNames: ["Goiânia"],
      quality: "mediocre",
      finale: value => `Etiam accumsan accumsan justo et tincidunt.`
    },
    {
      name: "Clima moderado",
      planetNames: [],
      quality: "good",
      finale: value =>
        `Duis lacinia auctor vestibulum. Proin hendrerit in ipsum in rutrum.`
    }
  ],

  water: [
    {
      name: "Água abundante",
      planetNames: ["Waterworld", "Blueball"],
      quality: "good",
      finale: value => `A água pi pi pi po po po.`
    }, 
    {
      name: "Sem traços de água",
      planetNames: [],
      quality: "bad",
      finale: value => `A água pi pi pi po po po.`
    }
  ],

  resources: [
    {
      name: "Rico em metais",
      planetNames: ["Vale dos metais"],
      quality: "good",
      finale: value => `Os metais pi pi pi po po po.`
    }, 
    {
      name: "Recursos naturais inexistentes",
      planetNames: ["Brasil pós-Bolsonaro"],
      quality: "bad",
      finale: value => `Os recursos naturais pi pi pi po po po.`
    }
  ],
  
};
