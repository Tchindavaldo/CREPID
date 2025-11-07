// next
import NextLink from 'next/link';
import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Stack, Container, Box, Button } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { CarouselDots, CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

const EXEMPLES = [
  {
    id: '1',
    title: 'Régénération des bambous de Chine',
    description: 'Programme de régénération pour la protection des points d\'eau potable consommée par les populations riveraines dans les Villages Bassossia et Banock',
    location: 'Bassossia et Banock, Ouest Cameroun',
    image: '/assets/images/travel/travel_post_01.jpg',
  },
  {
    id: '2',
    title: 'Gestion des emballages pesticides',
    description: 'Formation de 19 organisations de producteurs dans le bassin du lac Tchad en gestion des emballages des pesticides',
    location: 'Bassin du lac Tchad',
    image: '/assets/images/travel/travel_post_02.jpg',
  },
  {
    id: '3',
    title: 'Verger d\'avocatier',
    description: 'Culture à moindre risque et peu exigeante. Plus de 80 000 FCFA à gagner par plant dès l\'année de croisière',
    location: 'Bansoa, Ouest Cameroun',
    image: '/assets/images/travel/travel_post_03.jpg',
  },
  {
    id: '4',
    title: 'Ferme porcine de race Naïma',
    description: 'Production et vulgarisation de 140 géniteurs porcins de race naïma',
    location: 'Wang/Dja par Dschang',
    image: '/assets/images/travel/travel_post_04.jpg',
  },
  {
    id: '5',
    title: 'Pêche dans le fleuve Nyong',
    description: 'Formation et accompagnement des pêcheurs pour la promotion et le renforcement de la pêche',
    location: 'Fleuve Nyong',
    image: '/assets/images/travel/travel_post_05.jpg',
  },
  {
    id: '6',
    title: 'Actions Agricoles Féminines',
    description: 'Supervision pendant trois ans des Actions Agricoles Féminines pour le compte des Services du Développement Communautaire de l\'Ouest',
    location: 'Ouest Cameroun',
    image: '/assets/images/travel/travel_post_06.jpg',
  },
  {
    id: '7',
    title: 'Complexe agropastoral Diocèse',
    description: 'Réalisation des études de faisabilité, montage, suivi et évaluation d\'un projet de Complexe agropastoral',
    location: 'Diocèse de Bafoussam',
    image: '/assets/images/travel/travel_post_07.jpg',
  },
  {
    id: '8',
    title: 'Quatre fermes d\'application',
    description: 'Un verger d\'avocatier, une bananeraie plantain, une ferme d\'élevage porcin, une ferme de production du maïs',
    location: 'Fermes CREPID',
    image: '/assets/images/travel/travel_post_08.jpg',
  },
];

// ----------------------------------------------------------------------

export default function CrepidLandingExemples() {
  const theme = useTheme();
  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
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
        py: { xs: 8, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mb: { xs: 8, md: 10 },
          mx: 'auto',
          maxWidth: 640,
          textAlign: 'center',
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Nos Réalisations
        </Typography>

        <Typography variant="h2">Exemples Concrets de nos Interventions</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Découvrez quelques exemples concrets de nos réalisations sur le terrain, 
          au service des communautés et du développement durable.
        </Typography>
      </Stack>

      <Box sx={{ position: 'relative' }}>
        <CarouselArrows
          filled
          icon="carbon:arrow-right"
          onNext={handleNext}
          onPrev={handlePrev}
          leftButtonProps={{
            sx: {
              left: -16,
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
              right: -16,
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
            {EXEMPLES.map((exemple) => (
              <Box key={exemple.id} sx={{ px: 1.5, py: 1 }}>
                <ExempleItem exemple={exemple} />
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>

      <Stack alignItems="center" sx={{ mt: 8 }}>
        <Button
          component={NextLink}
          href="/realisations"
          size="large"
          variant="outlined"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          Voir toutes nos réalisations
        </Button>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ExempleItemProps = {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
};

function ExempleItem({ exemple }: { exemple: ExempleItemProps }) {
  const { title, description, location, image } = exemple;

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          '& .content': {
            transform: 'translateY(0)',
          },
        },
      }}
    >
      <Image src={image} alt={title} ratio="1/1" />

      <Stack
        className="content"
        spacing={1}
        sx={{
          p: 3,
          bottom: 0,
          zIndex: 9,
          width: '100%',
          position: 'absolute',
          color: 'common.white',
          bgcolor: (theme) => theme.palette.grey[900],
          transition: (theme) =>
            theme.transitions.create('transform', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.shorter,
            }),
          transform: 'translateY(calc(100% - 72px))',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Iconify icon="carbon:location" width={16} />
          <TextMaxLine variant="caption" line={1}>
            {location}
          </TextMaxLine>
        </Stack>

        <TextMaxLine variant="h6" line={1}>
          {title}
        </TextMaxLine>

        <TextMaxLine variant="body2" line={2} sx={{ opacity: 0.72 }}>
          {description}
        </TextMaxLine>
      </Stack>
    </Box>
  );
}
