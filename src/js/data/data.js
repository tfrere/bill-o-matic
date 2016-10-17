var data = {
  client: {
    name: "Karuna sheishen Europe",
    type: "bill",
    contact: "Franck BLOT",
    email: "franck.blot@gmail.com",
    commercialId: "",
    address: "38, rue de jouy",
    city: "Moulins les metz",
    zipcode: "57160",
    activity: "Association",
    phone: "0659578609"
  },
  title: "Osef",
  names: {
    devis: "D-16-01",
    bill: "F-16-01",
  },
  date: new Date(),
  prestations: [
      {
      name: "Site internet",
      description: "Création des pages login, lostPassword, FAQ, credits et bien d'autres trus encore super longs",
      quantity: 1,
      amout: 32
    },
    {
      name: "Site internet",
      quantity: 2,
      amout: 50
    },
    {
      name: "Site internet",
      description: "Blabla",
      quantity: 1,
      amout: 150
    }
  ],
  majorations: [{
    name: "Travail en urgence",
    amount: 10,
    type: "%"
  },
  {
    name: "Travail en urgence",
    amount: 10,
    type: "%"
  }],
  reductions: [{
    name: "Site internet",
    amount: 1,
    type: "%"
  },
  {
    name: "Site internet",
    amount: 1,
    type: "%"
  }],
  settings: {
    id: "",
    discount: "30",
    advance: "30",
    penalty: "30",
    currency: "€",
    cgv: {
      enabled: true,
      content: "cgv"
    },
    postalCode: "57160",
    address: "38, rue de jouy",
    city: "Moulins les metz",
    activity: "Informatique",
    duration: {
      draft: 3,
      bill: 3
    },
    author: {
      name: "Thibaud FRERE",
      email: "frere.thibaud@gmail.com",
    }
  },
  acceptedAt: new Date(),
  amount: 0,
  taxes: 0,
  state: 'bill',
  filename: "facture"
};

export default data;

