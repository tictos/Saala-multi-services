import { ServiceItem, Testimonial } from '../types';

export const BRAND_INFO = {
  name: "SMS Nettoyage & Multi-Services",
  shortName: "SMS Pro Services",
  whatsapp1: "+224 621 90 39 96",
  whatsapp1Clean: "224621903996",
  whatsapp2: "+224 664 04 15 05",
  whatsapp2Clean: "224664041505",
  phone1: "+224 621 90 39 96",
  phone1Clean: "224621903996",
  phone2: "+224 664 04 15 05",
  phone2Clean: "224664041505",
  phoneDisplay: "+224 621 90 39 96",
  whatsapp: "224621903996",
  locationCity: "Conakry, Guinée",
  address: "Basé à Conakry (Guinée) — Interventions partout à Conakry, en Guinée et dans toute la sous-région",
  regionCoverage: "Guinée (Conakry, Kindia, Boké, Kankan, Labé...) & Sous-Région (Sénégal, Mali, Côte d'Ivoire, Sierra Leone, Liberia...)",
  hours: "Assistance 7j / 7 (WhatsApp & Appel Direct) : 07h30 - 21h00",
  logoUrl: "https://raw.githubusercontent.com/tictos/images_ressources/main/LOGO_SMS-Photoroom.png",
  heroVideoUrl: "https://raw.githubusercontent.com/tictos/images_ressources/main/Video/Digen_video_1791043175167.mp4",
  heroVideoUrlFallback: "https://github.com/tictos/images_ressources/blob/main/Video/Digen_video_1791043175167.mp4?raw=true",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "fin-de-chantier",
    title: "Nettoyage Fin de Chantier & Remise en État",
    shortDesc: "Élimination complète des résidus de plâtre, ciment, colle, peinture et poussières fines pour rendre votre maison, villa ou bureau immédiatement habitable.",
    fullDesc: "Après des travaux de construction ou de rénovation à Conakry ou dans la sous-région, les ouvriers laissent inévitablement des traces tenaces. Notre équipe spécialisée intervient avec du matériel industriel (monobrosses haute pression, aspirateurs eau et poussière certifiés HEPA, décapants neutres) pour restituer des espaces immaculés, sains et prêts pour l'emménagement.",
    category: "cleaning",
    image: "/src/assets/images/post_construction_sparkling_clean_1791048225981.jpg",
    features: [
      "Décapage minutieux des traces de ciment, plâtre, peinture et voile de colle",
      "Aspiration en profondeur de toutes les poussières fines dans les moindres recoins",
      "Nettoyage et dégraissage intégral des vitrages, baies vitrées, encadrements et rails",
      "Désinfection et brillance des sanitaires, robinetteries, cuisines et placards neufs",
      "Lustrage et protection des revêtements de sol (carrelage, marbre, béton ciré)",
      "Évacuation soignée des derniers petits déchets et gravats résiduels"
    ],
    basePriceHint: "Sur devis après constat de l'agent",
    badge: "Service Phare"
  },
  {
    id: "electricite-batiment",
    title: "Électricité Bâtiment & Installations",
    shortDesc: "Câblage complet, pose de tableaux électriques, disjoncteurs, luminaires, prises, dépannage et mise aux normes sécurisées.",
    fullDesc: "Nos électriciens qualifiés interviennent sur vos chantiers neufs ou en rénovation pour concevoir des installations électriques fiables et conformes. De la distribution des circuits à la pose soignée de vos luminaires décoratifs, spots LED, disjoncteurs différentiels et prises de force.",
    category: "electricity",
    image: "/src/assets/images/electricity_service_1791055867936.jpg",
    features: [
      "Installation et câblage complet pour maisons neuves, villas, bureaux et commerces",
      "Pose de tableaux de répartition, disjoncteurs divisionnaires et différentiels",
      "Pose d'éclairages intérieurs et extérieurs (spots encastrés, lustres, projecteurs LED)",
      "Raccordement d'onduleurs, groupes électrogènes et dispositifs solaires",
      "Diagnostic sécuritaire, recherche de pannes et remise aux normes électriques"
    ],
    basePriceHint: "Sur devis après constat de l'agent",
    badge: "Électriciens Certifiés"
  },
  {
    id: "abonnement-journalier",
    title: "Entretien Régulier & Abonnements Mensuels",
    shortDesc: "Nettoyage quotidien ou périodique pour bureaux, locaux commerciaux, ambassades, banques, copropriétés et résidences privées.",
    fullDesc: "Gardez vos espaces professionnels et résidentiels impeccables tout au long de l'année. Nous concevons des forfaits d'entretien réguliers adaptés à vos besoins : interventions avant l'ouverture des bureaux, en journée discrète ou le soir après la fermeture.",
    category: "subscription",
    image: "/src/assets/images/post_construction_sparkling_clean_1791048225981.jpg",
    features: [
      "Fréquences modulables : quotidien (5j/7 ou 7j/7), 3x/semaine, ou hebdomadaire",
      "Désinfection des points de contact fréquents (poignées, claviers, rampes)",
      "Vidage et tri sélectif des poubelles avec remplacement des consommables",
      "Lavage et entretien des sols, moquettes et sanitaires avec produits écologiques",
      "Agents de propreté formés, discrets et encadrés par un chef d'équipe dédié"
    ],
    basePriceHint: "Tarification sur constat",
    badge: "Abonnement Flexible"
  },
  {
    id: "plomberie-eau",
    title: "Plomberie & Alimentation en Eau",
    shortDesc: "Adduction et alimentation en eau de résidences, forages, raccordements réseaux, installations sanitaires et dépannages.",
    fullDesc: "Nos artisans plombiers qualifiés assurent l'alimentation en eau potable de vos constructions neuves, l'installation complète des réseaux de tuyauterie (cuivre, multicouche, PPR/PEX) ainsi que le montage de vos équipements de plomberie et sanitaires.",
    category: "plumbing",
    image: "/src/assets/images/plumbing_installation_service_1791048235886.jpg",
    features: [
      "Alimentation générale en eau de maison neuve, villa, bureau et collectivité",
      "Pose de compteurs divisionnaires, surpresseurs, cuves d'eau et réducteurs de pression",
      "Installation complète de sanitaires (WC modernes, douches à l'italienne, lavabos)",
      "Pose et raccordement de chauffe-eau électriques, solaires et pompes immergées",
      "Recherche de fuites et dépannage rapide de canalisation"
    ],
    basePriceHint: "Sur devis après constat",
    badge: "Artisans Qualifiés"
  },
  {
    id: "maconnerie-dalettes",
    title: "Maçonnerie, Pose de Dalettes & Murs",
    shortDesc: "Pose professionnelle de dalettes de terrasse, pavés autobloquants, dallages extérieurs, élévation de murs et clôtures.",
    fullDesc: "Donnez de la structure et du cachet à vos extérieurs et intérieurs. Nos maçons chevronnés réalisent la pose de dallages décoratifs, la création d'allées pavées carrossables, le montage de murets de clôture et les reprises soignées de maçonnerie.",
    category: "masonry",
    image: "/src/assets/images/masonry_paving_stone_service_1791048245603.jpg",
    features: [
      "Posage de dalettes de terrasse, pavés autobloquants, dalles béton et pierres",
      "Construction de murs de clôture, cloisons de séparation et murets paysagers",
      "Chapes liquides, ragréage de sol et nivellement de terrain",
      "Création de caniveaux d'évacuation d'eau pluviale et bordures de propreté",
      "Finitions soignées et alignements rigoureux"
    ],
    basePriceHint: "Sur devis après constat",
    badge: "Finitions Solides"
  },
  {
    id: "decoration-jardin",
    title: "Décoration Intérieure & Aménagement de Jardin",
    shortDesc: "Sublimation de vos pièces de vie, peintures décoratives, habillages muraux et création d'espaces verts & cours paysagères.",
    fullDesc: "Harmonisez votre cadre de vie dès la fin de votre chantier. Notre équipe déco et paysagisme apporte la touche finale : harmonisation des couleurs intérieures, application d'enduits décoratifs et conception d'espaces verts verdoyants adaptés au climat local.",
    category: "decoration",
    image: "/src/assets/images/interior_garden_decoration_service_1791048255748.jpg",
    features: [
      "Décoration intérieure personnalisée (peintures contemporaines, éclairages, parements)",
      "Aménagement paysager de jardins, terrasses et cours de villa",
      "Plantation de haies végétales, massifs floraux, gazon naturel ou synthétique",
      "Installation de systèmes d'arrosage et luminaires d'extérieur",
      "Conseils personnalisés pour valoriser votre propriété"
    ],
    basePriceHint: "Sur devis après constat",
    badge: "Design & Nature"
  }
];

export const PROCESS_STEPS_DATA = [
  {
    step: "01",
    title: "Contact par WhatsApp ou Appel Direct",
    desc: "Vous nous contactez directement par WhatsApp ou par appel téléphonique au +224 621 90 39 96 ou +224 664 04 15 05 en partageant vos besoins de chantier.",
    badge: "WhatsApp & Appel 7j/7"
  },
  {
    step: "02",
    title: "Envoi d'un Agent sur le Terrain",
    desc: "Un agent qualifié se déplace sur votre chantier ou dans vos locaux (à Conakry ou en sous-région) pour constater l'état réel et évaluer les surfaces.",
    badge: "Visite de constat gratuite"
  },
  {
    step: "03",
    title: "Étude & Devis Précis Transmis",
    desc: "Notre équipe analyse les constats du terrain et vous transmet le devis officiel précis par WhatsApp ou e-mail.",
    badge: "Devis après constat"
  },
  {
    step: "04",
    title: "Validation & Démarrage Immédiat",
    desc: "Dès que vous validez la proposition, nos équipes outillées interviennent immédiatement jusqu'à la livraison complète et clé en main.",
    badge: "Travaux immédiats"
  }
];

export const SUBSCRIPTION_PLANS = [
  {
    id: "starter",
    name: "Formule Essentielle",
    frequency: "1 à 2 passages / semaine",
    target: "Petits bureaux, cabinets, appartements & commerces",
    popular: false,
    features: [
      "Aspiration et lavage soigné des sols",
      "Dépoussiérage des bureaux et surfaces de contact",
      "Désinfection complète des sanitaires et points d'eau",
      "Vidage des corbeilles et sacs poubelles",
      "Produits et consommables professionnels inclus",
      "Supervision régulière par un chef d'équipe"
    ]
  },
  {
    id: "comfort",
    name: "Formule Confort Sérénité",
    frequency: "3 à 4 passages / semaine",
    target: "Sièges d'entreprises, agences, villas & résidences",
    popular: true,
    features: [
      "Tout ce qui est inclus dans la Formule Essentielle",
      "Nettoyage complet des vitrages et baies vitrées",
      "Désinfection approfondie des postes informatiques",
      "Réapprovisionnement savon, essuie-mains et consommables",
      "Entretien des espaces cuisine / pause café",
      "1 grand nettoyage approfondi trimestriel offert",
      "Intervention prioritaire en cas d'urgence"
    ]
  },
  {
    id: "prestige",
    name: "Formule Prestige Quotidien",
    frequency: "Passage quotidien (5j/7 ou 7j/7)",
    target: "Grandes entreprises, ambassades, banques, villas de standing",
    popular: false,
    features: [
      "Présence quotidienne d'agents dédiés et formés",
      "Gestion complète de la propreté intérieure & abords extérieurs",
      "Traitement spécifique des sols (lustrage marbre, carrelage)",
      "Assistance dépannage électricité, plomberie & maçonnerie",
      "Nettoyage haute fréquence des vitres extérieures",
      "Superviseur dédié joignable 7j/7"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mamadou Ba",
    role: "Propriétaire de Villa",
    companyOrLocation: "Conakry (Kipé)",
    rating: 5,
    content: "J'ai appelé directement puis envoyé les photos de ma villa sur WhatsApp. Un agent est venu constater 2h après, devis validé et le lendemain les équipes étaient à l'œuvre. Fin de chantier et électricité au top !",
    serviceUsed: "Nettoyage Fin de Chantier & Électricité",
    date: "Mars 2026"
  },
  {
    id: "2",
    name: "Ibrahima Diallo",
    role: "Directeur Général",
    companyOrLocation: "Société Import-Export (Kaloum)",
    rating: 5,
    content: "Tout se gère avec fluidité par appel et WhatsApp pour l'entretien de nos bureaux. L'agent est venu établir le cahier des charges sur place et le contrat est parfaitement respecté.",
    serviceUsed: "Abonnement Entretien Bureaux",
    date: "Février 2026"
  },
  {
    id: "3",
    name: "Abdoulaye Camara",
    role: "Promoteur Immobilier",
    companyOrLocation: "Projets Résidentiels (Sous-Région)",
    rating: 5,
    content: "Polyvalence impressionnante : ils ont géré les raccordements d'électricité et plomberie, la pose de dalettes extérieures et le grand nettoyage de fin de chantier.",
    serviceUsed: "Électricité, Dalettes & Fin de Chantier",
    date: "Janvier 2026"
  }
];

export const FAQ_ITEMS = [
  {
    q: "Comment sont fixés les prix de vos prestations et abonnements ?",
    a: "Chez SMS Pro, tous les prix sont établis sur-mesure par un agent technique après visite de constatation directe sur votre terrain ou dans vos locaux. Comme chaque chantier a son niveau de saleté, ses accès et ses spécificités, cela vous garantit un tarif 100% juste sans mauvaise surprise."
  },
  {
    q: "Proposez-vous des travaux d'électricité et de plomberie sur les chantiers ?",
    a: "Oui ! En plus du nettoyage professionnel et de la remise en état, nous disposons d'artisans électriciens et plombiers qualifiés pour vos câblages, tableaux électriques, luminaires, forages et alimentations en eau."
  },
  {
    q: "Comment contacter l'entreprise pour faire venir un agent ?",
    a: "Vous pouvez nous joindre par WhatsApp ou par appel direct au +224 621 90 39 96 ou au +224 664 04 15 05. Nous répondons 7j/7 pour convenir immédiatement du passage d'un agent sur votre chantier."
  },
  {
    q: "Où êtes-vous situés et quelles zones couvrez-vous ?",
    a: "Nous sommes basés à Conakry (Guinée). Nous intervenons sur toute l'agglomération de Conakry (Kaloum, Dixinn, Ratoma, Matam, Matoto, Kagbélen, Dubréka, Coyah), dans toutes les régions de l'intérieur de la Guinée (Boké, Kindia, Mamou, Labé, Kankan...) ainsi que dans les pays de la sous-région ouest-africaine (Sénégal, Mali, Côte d'Ivoire, Sierra Leone, etc.)."
  }
];
