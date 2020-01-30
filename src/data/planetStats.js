export default {
  atmosphere: [
    {
      name: "Atmosfera tóxica",
      quality: "bad",
      finale: value =>
        `A atmosfera extremamente tóxica do planeta faz com que os colonizadores precisem usar trajes espaciais o tempo todo, mas devido a falhas em alguns trajes ${value} colonizadores morreram durante o processo de colonização.`
    },
    {
      name: "Atmosfera rarefeita",
      quality: "mediocre",
      finale: value =>
        `A atmosfera rarefeita do planeta permite que os colonizadores bla bla bla bla...`
    },
    {
      name: "Atmosfera respirável",
      quality: "good",
      finale: value =>
        `Com atmosfera semelhante a do planeta terra, permite que os colonizadores bla bla bla bla...`
    }
  ],

  gravity: [
    {
      name: "Gravidade que nem da terra",
      quality: "good",
      finale: value => `A gravidade pi pi pi po po po.`
    }
  ],

  temperature: [
    {
      name: "Temperatura fria da porra",
      quality: "bad",
      finale: value =>
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
      name: "Quente pra desgraça",
      quality: "bad",
      finale: value => `In ut urna felis. Nulla dapibus nec ante ac volutpat.`
    },
    {
      name: "Frio",
      quality: "mediocre",
      finale: value =>
        `Fusce sit amet sem lectus. Sed consequat ut justo sit amet accumsan.`
    },
    {
      name: "Quente",
      quality: "mediocre",
      finale: value => `Etiam accumsan accumsan justo et tincidunt.`
    },
    {
      name: "Clima moderado",
      quality: "good",
      finale: value =>
        `Duis lacinia auctor vestibulum. Proin hendrerit in ipsum in rutrum.`
    }
  ],

  water: [
    {
      name: "Água abundante",
      quality: "good",
      finale: value => `A água pi pi pi po po po.`
    }, 
    {
      name: "Sem traços de água",
      quality: "bad",
      finale: value => `A água pi pi pi po po po.`
    }
  ],

  resources: [
    {
      name: "Rico em metais",
      quality: "good",
      finale: value => `Os metais pi pi pi po po po.`
    }, 
    {
      name: "Recursos naturais inexistentes",
      quality: "bad",
      finale: value => `Os recursos naturais pi pi pi po po po.`
    }
  ],
  
};
