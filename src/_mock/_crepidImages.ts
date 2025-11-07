// CREPID Images Mapping
// Based on the organized structure in src/assets/images

export const CREPID_IMAGES = {
  // Hero images
  hero: [
    '/assets/images/career/career_1.jpg', // Placeholder for hero/image.png
    '/assets/images/career/career_2.jpg', // Placeholder for hero/image copy.png
    '/assets/images/career/career_3.jpg', // Placeholder for hero/image copy 2.png
    '/assets/images/career/career_4.jpg', // Placeholder for hero/image copy 3.png
  ],

  // Vision et Ambitions
  vision: [
    '/assets/images/career/career_5.jpg', // Placeholder for vision ambition/image.png
    '/assets/images/career/career_6.jpg', // Placeholder for vision ambition/image2.png
  ],

  // Domaines d'Intervention avec leurs vraies images
  domaines: {
    // Domaines avec plusieurs images (carousel auto-slide)
    'formations-pratiques-agricoles': [
      '/assets/images/career/career_7.jpg', // Placeholder for Avocatier
      '/assets/images/career/career_8.jpg', // Placeholder for Maïs contre-saison
      '/assets/images/career/career_9.jpg', // Placeholder for Banane plantain
      '/assets/images/career/career_10.jpg', // Placeholder for Transformation fruits
      '/assets/images/career/career_11.jpg', // Placeholder for Appui conseil
      '/assets/images/career/career_12.jpg', // Placeholder for Atelier transformation
      '/assets/images/company/company_1.png', // Placeholder for Ferme pilote
      '/assets/images/company/company_2.png', // Placeholder for Mise en place
    ],

    'formations-pratiques-animale': [
      '/assets/images/product/product_1.jpg', // Placeholder for Rucher et récolte
      '/assets/images/product/product_2.jpg', // Placeholder for Collecte miel
      '/assets/images/product/product_3.jpg', // Placeholder for Extraction pressoir
      '/assets/images/product/product_4.jpg', // Placeholder for Avicole 1
      '/assets/images/product/product_5.jpg', // Placeholder for Avicole 2
      '/assets/images/product/product_6.jpg', // Placeholder for Porc Landrace
      '/assets/images/product/product_7.jpg', // Placeholder for Porc Large White
      '/assets/images/product/product_8.jpg', // Placeholder for Rucher 2
    ],

    'gestion-durable-ressources': [
      '/assets/images/travel/travel_1.jpg', // Placeholder for image.png
      '/assets/images/travel/travel_2.jpg', // Placeholder for image2.png
      '/assets/images/travel/travel_3.jpg', // Placeholder for image copy.png
      '/assets/images/travel/travel_4.jpg', // Placeholder for image copy 2.png
      '/assets/images/travel/travel_5.jpg', // Placeholder for image copy 3.png
      '/assets/images/travel/travel_6.jpg', // Placeholder for image copy 4.png
      '/assets/images/travel/travel_7.jpg', // Placeholder for image copy 5.png
      '/assets/images/travel/travel_8.jpg', // Placeholder for image copy 6.png
    ],

    // Domaines avec 2 images
    'animation-formations': [
      '/assets/images/marketing/marketing_1.jpg', // Placeholder for image.png
      '/assets/images/marketing/marketing_2.jpg', // Placeholder for image2.png
    ],

    'autopromotion-populations': [
      '/assets/images/marketing/marketing_3.jpg', // Placeholder for image.png
      '/assets/images/marketing/marketing_4.jpg', // Placeholder for image copy.png
    ],

    'developpement-organisationnel': [
      '/assets/images/marketing/marketing_5.jpg', // Placeholder for image1.png
      '/assets/images/marketing/marketing_6.jpg', // Placeholder for image2.png
    ],

    'peche-aquaculture': [
      '/assets/images/course/course_1.jpg', // Placeholder for image.png
      '/assets/images/course/course_2.jpg', // Placeholder for image copy.png
    ],

    // Domaines sans images - utiliser des images africaines contextuelles
    'accompagnement-montage': [
      '/assets/images/career/career_about_team.jpg', // Image africaine contextuelle
    ],

    'suivi-evaluation': [
      '/assets/images/marketing/marketing_services_hero.jpg', // Image africaine contextuelle
    ],

    'etudes-recherches': [
      '/assets/images/course/course_teacher_hero.png', // Image africaine contextuelle
    ],

    'microfinance': [
      '/assets/images/career/career_newsletter.jpg', // Image africaine contextuelle
    ],

    'outils-communication': [
      '/assets/images/marketing/marketing_post_hero.jpg', // Image africaine contextuelle
    ],

    'professionnalisation': [
      '/assets/images/course/course_post_hero.jpg', // Image africaine contextuelle
    ],

    'genre-developpement': [
      '/assets/images/portrait/portrait_1.jpg', // Image africaine contextuelle
    ],
  },
};

// Fonction helper pour obtenir les images d'un domaine
export const getDomainImages = (domainKey: string): string[] => {
  return CREPID_IMAGES.domaines[domainKey as keyof typeof CREPID_IMAGES.domaines] || ['/assets/images/career/career_1.jpg'];
};

// Fonction helper pour obtenir une image aléatoire africaine contextuelle
export const getAfricanContextImage = (): string => {
  const africanImages = [
    '/assets/images/career/career_about_team.jpg',
    '/assets/images/marketing/marketing_services_hero.jpg',
    '/assets/images/course/course_teacher_hero.png',
    '/assets/images/career/career_newsletter.jpg',
    '/assets/images/marketing/marketing_post_hero.jpg',
    '/assets/images/course/course_post_hero.jpg',
    '/assets/images/portrait/portrait_1.jpg',
    '/assets/images/portrait/portrait_2.jpg',
    '/assets/images/portrait/portrait_3.jpg',
    '/assets/images/portrait/portrait_4.jpg',
  ];
  
  return africanImages[Math.floor(Math.random() * africanImages.length)];
};
