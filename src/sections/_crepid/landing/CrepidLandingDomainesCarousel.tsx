import { useRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Paper, CardContent, Container, Typography, Stack, Button } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { CarouselArrows } from 'src/components/carousel';
import SvgColor from 'src/components/svg-color';
import ImageCarousel from 'src/components/carousel/ImageCarousel';

// ----------------------------------------------------------------------

const DOMAINES = [
  {
    id: '1',
    title: 'Accompagnement au montage de projets',
    description: 'Accompagnement participatif des communautés, organisations, entreprises et individus dans l\'identification des problèmes et la mise sur pied des stratégies appropriées de solution',
    icon: 'carbon:chart-line-data',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Accompagnement au montage de projets/Gemini_Generated_Image_y33if7y33if7y33i.png',
    ],
  },
  {
    id: '2',
    title: 'Formations pratiques agricoles',
    description: 'Formation essentiellement pratique avec affectation immédiate auprès des exploitations. Suivi/encadrement pendant au moins un cycle de production',
    icon: 'carbon:crop-growth',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_1.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_4.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_5.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_6.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_7.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_8.png',
    ],
  },
  {
    id: '3',
    title: 'Suivi et évaluation de projets',
    description: 'Planification stratégique et opérationnelle, suivi des projets et populations bénéficiaires. Accompagnement dans la mise en place des unités de suivi interne',
    icon: 'carbon:task-complete',
    images: ['/assets/images/crepid/Domaines d\'Intervention/Développement organisationnel/image1.png'], // Dossier vide - Image contextuelle du développement organisationnel
  },
  {
    id: '4',
    title: 'Études et recherches innovantes',
    description: 'Conception de nouveaux modèles technologiques mis à la disposition des populations cibles',
    icon: 'carbon:chemistry',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Études et recherches innovantes/image copy 3.png',
      '/assets/images/crepid/Domaines d\'Intervention/Études et recherches innovantes/image copy 4.png',
      '/assets/images/crepid/Domaines d\'Intervention/Études et recherches innovantes/image copy 5.png',
      '/assets/images/crepid/Domaines d\'Intervention/Études et recherches innovantes/image copy 6.png',
    ],
  },
  {
    id: '5',
    title: 'Animation et formations',
    description: 'Organisation de formations et rencontres d\'échanges entre acteurs de développement. Production de supports audiovisuels pour la formation',
    icon: 'carbon:education',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Animation et formations/image.png',
      '/assets/images/crepid/Domaines d\'Intervention/Animation et formations/image2.png',
    ],
  },
  {
    id: '6',
    title: 'Développement organisationnel',
    description: 'Processus planifié de développement organisationnel engagé de façon concertée avec la structure pour faciliter le progrès',
    icon: 'carbon:collaborate',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Développement organisationnel/image1.png',
      '/assets/images/crepid/Domaines d\'Intervention/Développement organisationnel/image2.png',
    ],
  },
  {
    id: '7',
    title: 'Autopromotion populations urbaines',
    description: 'Appui à l\'autopromotion des populations démunies des milieux urbains. Développement de l\'artisanat et des petites activités',
    icon: 'carbon:user-multiple',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Autopromotion populations urbaines/image.png',
      '/assets/images/crepid/Domaines d\'Intervention/Autopromotion populations urbaines/image copy.png',
    ],
  },
  {
    id: '11',
    title: 'Professionnalisation producteurs',
    description: 'Développement de stratégies pour susciter l\'esprit de groupe et favoriser la professionnalisation dans les filières de production',
    icon: 'carbon:partnership',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Professionnalisation producteurs/watering-1501209_1920.webp',
    ],
  },
  {
    id: '12',
    title: 'Outils de communication',
    description: 'Réalisation de messages, supports et outils divers pour transmettre des idées et faire connaître des produits',
    icon: 'carbon:agriculture',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Outils de communication/Gemini_Generated_Image_hkr54phkr54phkr5.png',
    ],
  },
  {
    id: '13',
    title: 'Microcrédits et financement',
    description: 'Développement de stratégies et mécanismes de mobilisation des fonds pour le financement des activités des populations',
    icon: 'carbon:currency',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Microcrédits et financement/image.png',
    ],
  },
  {
    id: '14',
    title: 'Genre et Développement',
    description: 'Réflexions sur l\'approche genre et stratégies pour impliquer davantage la femme dans la vie économique, sociale et culturelle',
    icon: 'carbon:user-multiple',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Genre et Développement/Gemini_Generated_Image_hkr54phkr54phkr5.png',
    ],
  },
  // Pêche et aquaculture déjà défini avec vraies images CREPID plus haut
  {
    id: '15',
    title: 'Formations pratiques animale',
    description: 'Formation en élevage, apiculture, aviculture et autres activités animales avec suivi pratique',
    icon: 'carbon:analytics',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/Collecte et traitement du miel.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/Extaction grâce au Pressoir à miel.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/Rucher et récolte du miel.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/Rucher et récolte du miel2.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/avicole 1.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/avicole2.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/porc Race Landrace.png',
      '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/porc Race Large white ou yorkshire.png',
    ],
  },
  {
    id: '16',
    title: 'Gestion durable des ressources naturelles',
    description: 'Recherche et identification des stratégies de gestion durables des ressources naturelles. Développement de l\'agroforesterie',
    icon: 'carbon:analytics',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Gestion durable des ressources naturelles/image.png',
      '/assets/images/crepid/Domaines d\'Intervention/Gestion durable des ressources naturelles/image2.png',
      '/assets/images/crepid/Domaines d\'Intervention/Gestion durable des ressources naturelles/image copy.png',
      '/assets/images/crepid/Domaines d\'Intervention/Gestion durable des ressources naturelles/image copy 2.png',
    ],
  },
  {
    id: '17',
    title: 'Pêche et aquaculture',
    description: 'Développement de la pisciculture et des techniques de pêche durable pour les communautés',
    icon: 'carbon:user-multiple',
    images: [
      '/assets/images/crepid/Domaines d\'Intervention/Pêche et aquaculture/image.png',
      '/assets/images/crepid/Domaines d\'Intervention/Pêche et aquaculture/image copy.png',
    ],
  },
];

// ----------------------------------------------------------------------

export default function CrepidLandingDomainesCarousel() {
  const carouselRef = useRef<Carousel | null>(null);
  const theme = useTheme();

  const carouselSettings = {
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 640,
          mb: { xs: 8, md: 10 },
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Nos Services
        </Typography>

        <Typography variant="h2">Nos Domaines d'Intervention</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Le CREPID intervient dans plusieurs secteurs pour accompagner le développement rural
          intégré et durable.
        </Typography>

        <Box>
          <Button
            component={NextLink}
            href="/services"
            size="large"
            variant="outlined"
            color="inherit"
            endIcon={<Iconify icon="carbon:arrow-right" />}
          >
            Voir tout
          </Button>
        </Box>
      </Stack>

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <CarouselArrows 
          filled 
          icon="carbon:arrow-right" 
          onNext={handleNext} 
          onPrev={handlePrev}
          leftButtonProps={{
            sx: {
              left: 24,
              opacity: 0.48,
              color: 'common.white',
              bgcolor: 'text.primary',
              '&:hover': {
                opacity: 1,
                bgcolor: 'text.primary',
              },
            },
          }}
          rightButtonProps={{
            sx: {
              right: 24,
              opacity: 0.48,
              color: 'common.white',
              bgcolor: 'text.primary',
              '&:hover': {
                opacity: 1,
                bgcolor: 'text.primary',
              },
            },
          }}
        >
          <Carousel ref={carouselRef} {...carouselSettings}>
            {DOMAINES.map((item) => (
              <Box key={item.id} sx={{ px: 1 }}>
                <CarouselItem item={item} />
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

interface CarouselItemProps {
  id: string;
  title: string;
  description: string;
  images: string[];
  icon: string;
};

function CarouselItem({ item }: { item: CarouselItemProps }) {
  const theme = useTheme();
  const { title, description, images, icon } = item;

  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <ImageCarousel
        images={images}
        autoPlay={true}
        autoPlaySpeed={4000}
      />
      
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          width: 56,
          height: 56,
          borderRadius: '50%',
          bgcolor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: theme.customShadows.z8,
        }}
      >
        {icon.startsWith('carbon:') ? (
          <Iconify
            icon={icon}
            sx={{
              width: 28,
              height: 28,
              color: 'primary.main',
            }}
          />
        ) : (
          <SvgColor
            src={icon}
            sx={{
              width: 28,
              height: 28,
              color: 'primary.main',
            }}
          />
        )}
      </Box>

      <CardContent
        sx={{
          bottom: 0,
          zIndex: 9,
          width: '100%',
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
          ...bgGradient({
            direction: 'to top',
            startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
            endColor: `${theme.palette.grey[900]} 75%`,
          }),
        }}
      >
        <TextMaxLine variant="h5" sx={{ mb: 1 }}>
          {title}
        </TextMaxLine>

        <TextMaxLine variant="body2" line={2} sx={{ opacity: 0.72 }}>
          {description}
        </TextMaxLine>
      </CardContent>
    </Paper>
  );
}
