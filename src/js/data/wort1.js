var data = {
  client: {
    name: "Luxemburger Wort",
    contact: "Hugo",
    email: "hugo@gmail.com",
    commercialId: "Rcs Paris B538589052",
    address: "Luxembourg, 2, Rue Christophe Plantin",
    city: "Luxembourg",
    zipcode: "L-2339",
    activity: "social",
    phone: "",
    type: 0
  },
  settings: {
    id: "Siret : 519 303 382 00013",
    discount: "0",
    advance: "0",
    penalty: "30",
    currency: "€",
    cgv: {
      enabled: false,
      list: [
        {
          title: "Général",
          content:"Le présent devis prévoit l’intégralité des prestations que le prestataire s’engage à réaliser pour le Client. Toute prestation supplémentaire demandée par le Client donnera lieu à l'émission d’un nouveau devis ou avenant. "
        }
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
  title: "Wort - Première semaine d'intégration",
  names: {
    devis: "09",
    bill: "09",
  },
  date: new Date(),
  prestations: [
      {
      name: "Jours d'intégration",
      description: "Du 04 au 08 et du 11 au 15 septembre 2017",
      quantity: 10,
      amount: 410
    }
  ],
  majorations: [],
  reductions: [],
  amount: 0,
  amountWithoutModifs: 0,
  taxes: 0,
  state: 'bill',
  filename: "facture"
};

export default data;
