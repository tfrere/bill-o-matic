var data = {
  client: {
    name: "TBRC",
    contact: "Elie",
    email: "elie.roux@telecom-bretagne.eu",
    commercialId: "-",
    address: "1430 Massachusetts Ave.",
    city: "Cambridge, MA",
    zipcode: "02138",
    activity: "non-profit",
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
        {
          title: "Droit de publicité",
          content:"Sauf mention contraire explicite du client, FRERE Thibaud se réserve le droit de mentionner ses réalisations pour le client sur ses documents de communication externe et de publicité (site internet, portfolio, blog, plaquette, etc.) et lors de ses démarchages de prospection commerciale. Ce droit s’étend plus particulièrement aux éléments constitutifs de la réalisation, comprenant sans restriction la présentation publique des contenus suivants : Les contenus textuels, les contenus iconographiques."
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
  title: "Tibetan Buddhist Resource Center",
  names: {
    devis: "07",
    bill: "07",
  },
  date: new Date(),
  prestations: [
      {
      name: "Landing page revision",
      description: "UXPin document",
      quantity: 1.5,
      amount: 300
    },
    {
      name: "Graphical guidelines",
      description: "Static website",
      quantity: 0.5,
      amount: 300
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
