/* ============================================
   DONNÉES - 24 GOUVERNORATS DE TUNISIE
   ============================================ */

const gouvernorats = {
  tunis: {
    id: 1,
    nom: "Tunis",
    nom_arabe: "تونس",
    region: "Grand Tunis",
    chef_lieu: "Tunis",
    population: 1056247,
    superficie: 346,
    densite: 3053,
    code_postal: "1000-1099",
    delegations: 21,
    description: "Capitale politique, économique et culturelle de la Tunisie. Tunis est le centre administratif et commercial majeur du pays. La médina historique est inscrite au patrimoine mondial de l'UNESCO, témoignant de son importance historique et culturelle à travers les siècles.",
    economie: "Services, administration, tourisme, commerce, industrie légère, finance",
    patrimoine: ["Médina de Tunis (UNESCO)", "Mosquée Zitouna", "Musée du Bardo", "Avenue Habib Bourguiba", "Carthage", "Sidi Bou Saïd"],
    region_color: "#CE1126"
  },
  
  ariana: {
    id: 2,
    nom: "Ariana",
    nom_arabe: "أريانة",
    region: "Grand Tunis",
    chef_lieu: "Ariana",
    population: 576088,
    superficie: 482,
    densite: 1195,
    code_postal: "2000-2099",
    delegations: 7,
    description: "Banlieue nord de Tunis, Ariana est un centre résidentiel important. Elle combine le développement urbain moderne avec des traditions locales, offrant une vie de proximité avec la capitale.",
    economie: "Résidentiel, services, commerce, petite et moyenne industrie",
    patrimoine: ["Mosquée Kheireddin Pacha", "Parc urbain d'Ariana", "Complexes commerciaux"],
    region_color: "#CE1126"
  },
  
  benArous: {
    id: 3,
    nom: "Ben Arous",
    nom_arabe: "بن عروس",
    region: "Grand Tunis",
    chef_lieu: "Ben Arous",
    population: 631842,
    superficie: 761,
    densite: 830,
    code_postal: "2013-2099",
    delegations: 12,
    description: "Banlieue sud-est de Tunis, Ben Arous est une zone industrielle importante avec une forte activité économique. Elle accueille plusieurs zones industrielles et parcs technologiques.",
    economie: "Industrie, services, agriculture, commerce, textile",
    patrimoine: ["Hammam-Lif", "Radès", "Ezzahra", "Musée archéologique"],
    region_color: "#CE1126"
  },
  
  manouba: {
    id: 4,
    nom: "Manouba",
    nom_arabe: "منوبة",
    region: "Grand Tunis",
    chef_lieu: "Manouba",
    population: 403671,
    superficie: 1137,
    densite: 355,
    code_postal: "2010-2099",
    delegations: 8,
    description: "Banlieue ouest de Tunis, Manouba est un centre administratif et éducatif important. Elle accueille l'Université de Manouba et plusieurs institutions de formation.",
    economie: "Agriculture, industrie, éducation, services, commerce",
    patrimoine: ["Université de Manouba", "Oued Ellil", "Parc forestier"],
    region_color: "#CE1126"
  },
  
  nabeul: {
    id: 5,
    nom: "Nabeul",
    nom_arabe: "نابل",
    region: "Nord-Est",
    chef_lieu: "Nabeul",
    population: 787920,
    superficie: 2788,
    densite: 283,
    code_postal: "8000-8099",
    delegations: 16,
    description: "Région du Cap Bon, Nabeul est réputée pour son artisanat traditionnel, particulièrement la céramique. Elle combine beauté naturelle et activités touristiques avec agriculture florissante.",
    economie: "Tourisme, agriculture, artisanat (poterie, céramique), commerce",
    patrimoine: ["Hammamet", "Kelibia", "Kerkouane (UNESCO)", "Marché de la céramique"],
    region_color: "#4CAF50"
  },
  
  zaghouan: {
    id: 6,
    nom: "Zaghouan",
    nom_arabe: "زغوان",
    region: "Nord-Est",
    chef_lieu: "Zaghouan",
    population: 176945,
    superficie: 2820,
    densite: 63,
    code_postal: "1100-1199",
    delegations: 6,
    description: "Région montagneuse du nord, Zaghouan est célèbre pour ses sources d'eau naturelles et son patrimoine archéologique romain. Le paysage montagneux offre une beauté naturelle remarquable.",
    economie: "Agriculture, eau minérale, tourisme, élevage",
    patrimoine: ["Temple des Eaux", "Aqueduc romain", "Djebel Zaghouan", "Sources naturelles"],
    region_color: "#4CAF50"
  },
  
  bizerte: {
    id: 7,
    nom: "Bizerte",
    nom_arabe: "بنزرت",
    region: "Nord-Est",
    chef_lieu: "Bizerte",
    population: 568219,
    superficie: 3685,
    densite: 154,
    code_postal: "7000-7099",
    delegations: 14,
    description: "Port stratégique au nord de la Tunisie, Bizerte est un centre maritime important avec une longue histoire. La ville combine activités portuaires, tourisme côtier et pêche.",
    economie: "Port, pêche, industrie (produits alimentaires), tourisme, commerce",
    patrimoine: ["Vieux Port", "Corniche de Bizerte", "Parc Ichkeul (UNESCO)", "Kasbah"],
    region_color: "#4CAF50"
  },
  
  beja: {
    id: 8,
    nom: "Béja",
    nom_arabe: "باجة",
    region: "Nord-Ouest",
    chef_lieu: "Béja",
    population: 303032,
    superficie: 3740,
    densite: 81,
    code_postal: "9000-9099",
    delegations: 9,
    description: "Située au nord-ouest, Béja est surnommée le 'Grenier à blé de la Tunisie'. C'est une région agricole majeure avec des terres fertiles et une importante production céréalière.",
    economie: "Agriculture (céréales, légumes), élevage, industrie agroalimentaire",
    patrimoine: ["Dougga (UNESCO)", "Testour", "Musée archéologique", "Barrage"],
    region_color: "#2196F3"
  },
  
  jendouba: {
    id: 9,
    nom: "Jendouba",
    nom_arabe: "جندوبة",
    region: "Nord-Ouest",
    chef_lieu: "Jendouba",
    population: 401477,
    superficie: 3102,
    densite: 129,
    code_postal: "8100-8199",
    delegations: 9,
    description: "Région de forêts et de montagnes, Jendouba est riche en ressources naturelles. Elle offre des paysages verdoyants et un patrimoine archéologique important.",
    economie: "Agriculture, liège (produits forestiers), élevage, tourisme",
    patrimoine: ["Bulla Regia", "Chemtou", "Aïn Draham", "Forêts de liège"],
    region_color: "#2196F3"
  },
  
  kef: {
    id: 10,
    nom: "Le Kef",
    nom_arabe: "الكاف",
    region: "Nord-Ouest",
    chef_lieu: "Le Kef",
    population: 243156,
    superficie: 4965,
    densite: 49,
    code_postal: "7100-7199",
    delegations: 11,
    description: "Région montagneuse du nord-ouest, Le Kef est riche en histoire et patrimoine archéologique. La kasbah impressionnante domine le paysage et offre une vue panoramique.",
    economie: "Agriculture, élevage, tourisme culturel, artisanat",
    patrimoine: ["Kasbah du Kef", "Table de Jugurtha", "Musée des arts", "Tombeaux romains"],
    region_color: "#2196F3"
  },
  
  siliana: {
    id: 11,
    nom: "Siliana",
    nom_arabe: "سليانة",
    region: "Nord-Ouest",
    chef_lieu: "Siliana",
    population: 223087,
    superficie: 4631,
    densite: 48,
    code_postal: "6100-6199",
    delegations: 11,
    description: "Région agricole du nord-ouest, Siliana est connue pour ses terres fertiles et sa production de céréales et d'olives. C'est une zone importante de l'agriculture tunisienne.",
    economie: "Agriculture (céréales, olives), élevage, industrie agroalimentaire",
    patrimoine: ["Zama", "Makthar", "Sites archéologiques romains", "Mausolée"],
    region_color: "#2196F3"
  },
  
  sousse: {
    id: 12,
    nom: "Sousse",
    nom_arabe: "سوسة",
    region: "Centre-Est",
    chef_lieu: "Sousse",
    population: 674971,
    superficie: 2621,
    densite: 257,
    code_postal: "4000-4099",
    delegations: 16,
    description: "Troisième ville de Tunisie, Sousse est surnommée 'la Perle du Sahel'. C'est une destination touristique majeure avec une médina historique et des plages magnifiques.",
    economie: "Tourisme, textile, agroalimentaire, commerce, services",
    patrimoine: ["Médina de Sousse (UNESCO)", "Ribat", "Grande Mosquée", "Port El Kantaoui"],
    region_color: "#FF9800"
  },
  
  monastir: {
    id: 13,
    nom: "Monastir",
    nom_arabe: "المنستير",
    region: "Centre-Est",
    chef_lieu: "Monastir",
    population: 548828,
    superficie: 1019,
    densite: 539,
    code_postal: "5000-5099",
    delegations: 13,
    description: "Ville balnéaire réputée, Monastir est la ville natale de Habib Bourguiba. Elle combine patrimoine historique, tourisme côtier et station balnéaire moderne.",
    economie: "Tourisme, textile, services, commerce, agroalimentaire",
    patrimoine: ["Ribat de Monastir", "Mausolée Bourguiba", "Marina", "Médina"],
    region_color: "#FF9800"
  },
  
  mahdia: {
    id: 14,
    nom: "Mahdia",
    nom_arabe: "المهدية",
    region: "Centre-Est",
    chef_lieu: "Mahdia",
    population: 410812,
    superficie: 2966,
    densite: 139,
    code_postal: "5100-5199",
    delegations: 11,
    description: "Ancienne capitale fatimide, Mahdia est une ville côtière importante. Elle est réputée pour sa pêche, ses traditions et ses richesses archéologiques.",
    economie: "Pêche, tourisme, textile, commerce, services",
    patrimoine: ["Médina de Mahdia", "Port de pêche", "El Jem (amphithéâtre romain)", "Fort"],
    region_color: "#FF9800"
  },
  
  sfax: {
    id: 15,
    nom: "Sfax",
    nom_arabe: "صفاقس",
    region: "Centre-Est",
    chef_lieu: "Sfax",
    population: 955421,
    superficie: 7545,
    densite: 127,
    code_postal: "3000-3099",
    delegations: 16,
    description: "Deuxième ville de Tunisie et capitale économique du sud. Sfax est un centre industriel majeur avec un port important et une économie dynamique.",
    economie: "Industrie (textile, chimie), pêche, phosphate, huile d'olive, commerce",
    patrimoine: ["Médina de Sfax", "Îles Kerkennah", "Port de commerce", "Musée Dar Jallouli"],
    region_color: "#FF9800"
  },
  
  kairouan: {
    id: 16,
    nom: "Kairouan",
    nom_arabe: "القيروان",
    region: "Centre-Ouest",
    chef_lieu: "Kairouan",
    population: 570559,
    superficie: 6712,
    densite: 85,
    code_postal: "3100-3199",
    delegations: 11,
    description: "Quatrième ville sainte de l'Islam, Kairouan est un centre religieux majeur. La ville est réputée pour son artisanat traditionnel, notamment les tapis et les tissus.",
    economie: "Artisanat (tapis, tissus), agriculture, commerce, tourisme religieux",
    patrimoine: ["Grande Mosquée (UNESCO)", "Médina", "Bassins aghlabides", "Mausolée du Barbarousse"],
    region_color: "#9C27B0"
  },
  
  kasserine: {
    id: 17,
    nom: "Kasserine",
    nom_arabe: "القصرين",
    region: "Centre-Ouest",
    chef_lieu: "Kasserine",
    population: 439243,
    superficie: 8260,
    densite: 53,
    code_postal: "1200-1299",
    delegations: 13,
    description: "Région montagneuse du centre-ouest, Kasserine est riche en ressources naturelles. Elle accueille le parc national du Djebel Chambi et plusieurs sites archéologiques.",
    economie: "Agriculture, élevage, phosphate et minerais, tourisme",
    patrimoine: ["Djebel Chambi", "Parc national", "Sbeitla (ruines romaines)", "Thala"],
    region_color: "#9C27B0"
  },
  
  sidiBouzid: {
    id: 18,
    nom: "Sidi Bouzid",
    nom_arabe: "سيدي بوزيد",
    region: "Centre-Ouest",
    chef_lieu: "Sidi Bouzid",
    population: 429912,
    superficie: 7405,
    densite: 58,
    code_postal: "9100-9199",
    delegations: 12,
    description: "Berceau de la Révolution tunisienne de 2010-2011. Sidi Bouzid est une région agricole importante avec une forte production de céréales et d'olives.",
    economie: "Agriculture (céréales, olives), élevage, commerce",
    patrimoine: ["Sites de la révolution", "Mausolée", "Marché agricole"],
    region_color: "#9C27B0"
  },
  
  gafsa: {
    id: 19,
    nom: "Gafsa",
    nom_arabe: "قفصة",
    region: "Sud-Ouest",
    chef_lieu: "Gafsa",
    population: 337331,
    superficie: 8990,
    densite: 38,
    code_postal: "2100-2199",
    delegations: 11,
    description: "Bassin minier du phosphate tunisien, Gafsa est un centre minier majeur. La région combine activité minière et patrimoine archéologique romain important.",
    economie: "Phosphate et minerais, industrie minière, tourisme",
    patrimoine: ["Piscines romaines", "Musée archéologique", "Sites miniers", "Ruines romaines"],
    region_color: "#F4A460"
  },
  
  tozeur: {
    id: 20,
    nom: "Tozeur",
    nom_arabe: "توزر",
    region: "Sud-Ouest",
    chef_lieu: "Tozeur",
    population: 107912,
    superficie: 5593,
    densite: 19,
    code_postal: "2200-2299",
    delegations: 6,
    description: "Porte du désert, Tozeur est une destination touristique majeure du Sahara. La ville est réputée pour ses dattes, ses oasis et ses paysages désertiques fascinants.",
    economie: "Tourisme saharien, dattes, commerce, agriculture oasienne",
    patrimoine: ["Chott el-Jérid", "Oasis de Tozeur", "Architecture traditionnelle", "Palmeraies"],
    region_color: "#F4A460"
  },
  
  kebili: {
    id: 21,
    nom: "Kébili",
    nom_arabe: "قبلي",
    region: "Sud-Est",
    chef_lieu: "Kébili",
    population: 156961,
    superficie: 22454,
    densite: 7,
    code_postal: "4200-4299",
    delegations: 6,
    description: "Grand désert et oasis du sud, Kébili est une région très peu densément peuplée. Elle offre des expériences touristiques sahariennes uniques et une culture bédouine authentique.",
    economie: "Dattes, tourisme saharien, élevage, commerce",
    patrimoine: ["Douz (capitale du Sahara)", "Ksar Ghilane", "Grand Erg Oriental", "Oasis"],
    region_color: "#795548"
  },
  
  gabes: {
    id: 22,
    nom: "Gabès",
    nom_arabe: "قابس",
    region: "Sud-Est",
    chef_lieu: "Gabès",
    population: 374300,
    superficie: 7166,
    densite: 52,
    code_postal: "6000-6099",
    delegations: 10,
    description: "Oasis maritime unique au monde, Gabès combine mer et palmeraies. C'est un site géographique rare et important avec une économie diversifiée.",
    economie: "Agriculture (dattes), industrie chimique, pêche, phosphate, tourisme",
    patrimoine: ["Oasis maritime", "Matmata", "Îles Djerba", "Musée"],
    region_color: "#795548"
  },
  
  medenine: {
    id: 23,
    nom: "Médenine",
    nom_arabe: "مدنين",
    region: "Sud-Est",
    chef_lieu: "Médenine",
    population: 479520,
    superficie: 8588,
    densite: 56,
    code_postal: "4100-4199",
    delegations: 9,
    description: "Région de l'île de Djerba et des ksour. Médenine est réputée pour sa destination touristique de Djerba et son patrimoine architectural berbère unique.",
    economie: "Tourisme (Djerba), agriculture, pêche, commerce",
    patrimoine: ["Djerba (île)", "Ksar Médenine", "Guellala", "Synagogue El Ghriba"],
    region_color: "#795548"
  },
  
  tataouine: {
    id: 24,
    nom: "Tataouine",
    nom_arabe: "تطاوين",
    region: "Sud-Est",
    chef_lieu: "Tataouine",
    population: 149453,
    superficie: 38889,
    densite: 4,
    code_postal: "3200-3299",
    delegations: 9,
    description: "Région désertique et montagneuse du sud-est, Tataouine est célèbre pour son architecture berbère traditionnelle. La région offre des paysages désertiques spectaculaires et une culture authentique.",
    economie: "Tourisme, agriculture, élevage, artisanat",
    patrimoine: ["Ksar Ouled Soltane", "Chenini", "Douiret", "Paysages lunaires"],
    region_color: "#795548"
  }
};

// Fonction pour obtenir un gouvernorat par ID
function getGouvernoratById(id) {
  for (let key in gouvernorats) {
    if (gouvernorats[key].id === id) {
      return gouvernorats[key];
    }
  }
  return null;
}

// Fonction pour obtenir un gouvernorat par nom (clé)
function getGouvernoratByNom(nom) {
  return gouvernorats[nom] || null;
}

// Fonction pour obtenir les gouvernorats d'une région
function getGouvernoratsByRegion(region) {
  return Object.keys(gouvernorats).filter(key => gouvernorats[key].region === region);
}

// Liste des régions
const regions = [
  "Grand Tunis",
  "Nord-Est",
  "Nord-Ouest",
  "Centre-Est",
  "Centre-Ouest",
  "Sud-Ouest",
  "Sud-Est"
];

// Statistiques globales de la Tunisie
const tunisieStats = {
  nom: "Tunisie",
  population_totale: 12356117,
  superficie_totale: 163610,
  gouvernorats_total: 24,
  densite_moyenne: 75,
  capital: "Tunis"
};
