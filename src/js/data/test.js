var data = {
  client: {
    name: "Collectivz",
    contact: "Boris Sirbey",
    email: "franck.blot@gmail.com",
    commercialId: "81393480900019",
    address: "25 Rue Auger",
    city: "Pantin",
    zipcode: "93500",
    activity: "SASU",
    phone: ""
  },
  settings: {
    id: "519 303 382 00013",
    discount: "30",
    advance: "30",
    penalty: "30",
    currency: "€",
    cgv: {
      enabled: true,
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
          title: "Droit de sur les travaux réalisés",
          content:"Il est ici rappelé à titre informatif que selon le Code français de la propriété intellectuelle (articles L.121-1 à L.121-9), le droit moral d’une création (comprenant droit de divulgation, droit au respect de l’oeuvre et droit au retrait) est attaché à son créateur de manière perpétuelle et imprescriptible. De fait, ne seront cédés au client que les droits patrimoniaux explicitement énoncés sur la facture au champ « Droits cédés », à l’exclusion de tout autre, et ce dans les éventuelles limites y gurant également (limite de support, de territoire ou de durée). Ces droits peuvent notamment comprendre le droit de reproduction, le droit de représentation, le droit de modication, le droit d’exploitation. Il est enn rappelé que selon le même Code français de la propriété intellectuelle (Art. L. 122-4), toute représentation ou reproduction intégrale ou partielle faite sans le consentement de l’auteur ou de ses ayants droit est illicite et punie selon les lois relatives au délit de contrefaçon. Il en est de même pour la traduction, l’adaptation ou la transformation, l’arrangement ou la reproduction par un art ou un procédé quelconque."
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
  title: "Test d'intitulé",
  names: {
    devis: "04",
    bill: "04",
  },
  date: new Date(),
  prestations: [
      {
      name: "Création de modules CSS indépendants",
      description: "Chat, listes, evenements spéciaux, login, chargement, profile.",
      quantity: 4,
      amount: 200
    },
    {
      name: "Revue du code",
      description: "Analyse du code , recherche de pistes d'améliorations architecturale et session pratique pour aider à la mise en place avec Philippe",
      quantity: 0.5,
      amount: 200
    },
    {
      name: "Intégration des modules CSS au projet",
      description: "Page login, mot de passe oublié, mon compte, blog, article, agenda, copyright, FAQ",
      quantity: 5.5,
      amount: 200
    },
    {
      name: "Blabla blablabla",
      quantity: 5.5,
      amount: 200
    }
  ],
  majorations: [{
    name: "Navigation du slider",
    amount: 10,
    type: "%"
  },
  {
    name: "Travail en urgence",
    amount: 10,
    type: "+"
  }],
  reductions: [{
    name: "Site internet",
    amount: 1,
    type: "%"
  },
  {
    name: "Site internet",
    amount: 10,
    type: "-"
  }],
  amount: 0,
  amountWithoutModifs: 0,
  taxes: 0,
  state: 'bill',
  filename: "facture"
};

export default data;
