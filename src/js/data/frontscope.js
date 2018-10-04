var data = {
  client: {
    name: "BlueScreen",
    contact: "Anthony Lacroix",
    email: "",
    commercialId: "Siret en cours d'immatriculation",
    address: "7, Avenue de Blida",
    city: "Metz",
    zipcode: "57000",
    activity: "SCOP",
    phone: "",
    type: 0
  },
  settings: {
    id: "519 303 382 00013",
    discount: "30",
    advance: "30",
    penalty: "30",
    currency: "€",
    cgv: {
      enabled: false,
      list: []
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
  title: "Annuaire des scopes",
  names: {
    devis: "06",
    bill: "06",
  },
  date: new Date(),
  prestations: [
    {
      name: "Recherche sur les technologies à employer",
      description: "Contraintes des 3500 markers",
      quantity: 1,
      amount: 300
    },
    {
      name: "Déploiement de la partie front-end",
      description: "Répondant aux contraintes suivantes: mobile, tablet, desktop et tablette tactile géante",
      quantity: 5,
      amount: 300
    },
    {
      name: "Déploiement des app IOS et Android",
      description: "",
      quantity: 1,
      amount: 860
    }
  ],
  amount: 0,
  amountWithoutModifs: 0,
  taxes: 0,
  state: 'bill',
  filename: "facture"
};

export default data;
