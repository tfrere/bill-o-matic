var data = {
  client: {
    name: "Karuna Shechen Europe",
    contact: "Franck BLOT",
    email: "franck.blot@gmail.com",
    commercialId: "",
    address: "20 bis, rue Louis Philippe",
    city: "Neuilly-sur-Seine",
    zipcode: "92200",
    activity: "Association",
    phone: ""
  },
  settings: {
    id: "519 303 382 00013",
    discount: "30",
    advance: "30",
    penalty: "30",
    currency: "€",
    cgv: {
      enabled: false,
      list: [
        {
          title: "Général",
          content:"Le présent devis prévoit l’intégralité des prestations que le prestataire s’engage à réaliser pour le Client. Toute prestation supplémentaire demandée par le Client donnera lieu à l'émission d’un nouveau devis ou avenant. "
        },
        {
          title: "Litige",
          content:"Une fois validé par le Client, le présent devis a valeur de contrat. Dans l’hypothèse d’une rupture de contrat à l’initiative du Client, ce dernier s’engage à régler les prestations réalisées."
        },
        {
          title: "Paiement anticipé",
          content:"En conformité de l’article L 441-6 du Code de commerce: Pas d’escompte pour paiement anticipé."
        },
        {
          title: "Règlement",
          content:"Tout règlement effectué après expiration de ce délai donnera lieu, à titre de pénalité de retard, à l’application d’un intérêt égal à celui appliqué parla Banque Centrale Européenne à son opération de refinancement la plus récente, majoré au minimum de 10 points de pourcentage, ainsi qu'à une indemnitéforfaitaire pour frais de recouvrement d'un montant de 40 Euros."
        },
        {
          title: "Retard",
          content:"Les pénalités de retard sont exigibles sans qu’un rappel soit nécessaire."
        },
        {
          title: "Droits d'utilisations",
          content:"Informations concernant les droits d'exploitation :Le prestataire ne cède que les droits d’exploitation de la création limités aux termes du présent document.Le prestataire reste propriétaire de l’intégralité des créations tant que la prestation n’est pas entièrement réglée.Toute utilisation sortant du cadre initialement prévu dans ce devis est interdite; sauf autorisation expresse et écrite du prestataire"
        },
      ]
    },
    postalCode: "57160",
    address: "38, rue de jouy",
    city: "Moulins les metz",
    activity: "Informatique",
    duration: {
      draft: 90,
      bill: 90
    },
    author: {
      name: "Thibaud FRERE",
      email: "frere.thibaud@gmail.com",
    }
  },
  title: "Nouveau site de Matthieu Ricard",
  names: {
    devis: "02",
    bill: "02",
  },
  date: new Date(),
  prestations: [
      {
      name: "Guidelines au format pdf",
      description: "Création des pages login, lostPassword, FAQ, credits et bien d'autres trus encore super longs",
      quantity: 1,
      amount: 300
    },
    {
      name: "Revue des pages de type 'show' ",
      quantity: 0.5,
      amount: 300
    },
    {
      name: "Design des pages non définies par le premier devis",
      description: "Page login, mot de passe oublié, mon compte, blog, article, agenda, copyright, FAQ",
      quantity: 4,
      amount: 300
    },
    {
      name: "Design du chargement des pages",
      description: "",
      quantity: 0.5,
      amount: 300
    },
    {
      name: "Animation d'appartion des pages",
      description: "",
      quantity: 0.5,
      amount: 300
    },
    {
      name: "Animation des blocs d'informations",
      description: "Pour l'état au passage de la souris",
      quantity: 0.5,
      amount: 300
    },
    {
      name: "Améliorations SEO",
      description: "",
      quantity: 1,
      amount: 300
    },
    {
      name: "Favicon",
      description: "Dans tous les formats pour desktop et mobile",
      quantity: 0.5,
      amount: 300
    },
    {
      name: "Navigation du slider",
      description: "Pages d'accueil et Karuna",
      quantity: 0.5,
      amount: 300
    }
  ],
  // majorations: [{
  //   name: "Navigation du slider",
  //   amount: 10,
  //   type: "%"
  // },
  // {
  //   name: "Travail en urgence",
  //   amount: 10,
  //   type: "-"
  // }],
  // reductions: [{
  //   name: "Site internet",
  //   amount: 1,
  //   type: "%"
  // },
  // {
  //   name: "Site internet",
  //   amount: 1,
  //   type: "%"
  // }],
  amount: 0,
  amountWithoutModifs: 0,
  taxes: 0,
  state: 'bill',
  filename: "facture"
};

export default data;
