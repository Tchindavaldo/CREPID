import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import { Typography, Container, Stack, Box } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Image from 'src/components/image';
import Carousel, { CarouselArrows } from 'src/components/carousel';
import { m } from 'framer-motion';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

const PROJETS = [
  {
    title: 'Filière avocat et papaye',
    totalProjects: 12,
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_1.png',
  },
  {
    title: 'Conservation du vin de raphia',
    totalProjects: 8,
    image: '/assets/images/crepid/Domaines d\'Intervention/Gestion durable des ressources naturelles/image.png',
  },
  {
    title: 'Centre d\'accueil femmes et enfants',
    totalProjects: 5,
    image: '/assets/images/crepid/vision ambition/Bien-être social.png',
  },
  {
    title: 'Mécanisation par traction animale',
    totalProjects: 10,
    image: '/assets/images/crepid/Domaines d\'Intervention/Professionnalisation producteurs/watering-1501209_1920.webp',
  },
  {
    title: 'Points d\'eau potable',
    totalProjects: 15,
    image: '/assets/images/crepid/vision ambition/image.png',
  },
  {
    title: 'Cartographie des raphiales',
    totalProjects: 6,
    image: '/assets/images/crepid/Domaines d\'Intervention/Gestion durable des ressources naturelles/image2.png',
  },
  {
    title: 'Régénération des Bambous',
    totalProjects: 8,
    image: '/assets/images/crepid/vision ambition/Protection environnementale.png',
  },
];

// ----------------------------------------------------------------------

export default function CrepidLandingPerspectives() {
  const theme = useTheme();
  const isMdUp = useResponsive('up', 'md');
  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
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
    <Box sx={{ bgcolor: 'common.white' }}>
      <Container
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Stack
          direction="row"
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h3">Projets en Perspective</Typography>
            <Typography sx={{ color: 'text.secondary', maxWidth: 640 }}>
              Le CREPID recherche activement des partenaires pour la mise en œuvre de ces projets structurants.
            </Typography>
          </Stack>

          {isMdUp && <CarouselArrows onNext={handleNext} onPrev={handlePrev} spacing={2} />}
        </Stack>

        <Carousel ref={carouselRef} {...carouselSettings}>
          {PROJETS.map((projet) => (
            <ProjetItem key={projet.title} projet={projet} />
          ))}
        </Carousel>

        {!isMdUp && (
          <CarouselArrows
            spacing={2}
            justifyContent="center"
            onNext={handleNext}
            onPrev={handlePrev}
            sx={{ mt: 8, width: 1 }}
          />
        )}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ProjetItemProps = {
  projet: {
    title: string;
    totalProjects: number;
    image: string;
  };
};

function ProjetItem({ projet }: ProjetItemProps) {
  const { title, totalProjects, image } = projet;

  return (
    <Box
      component={m.div}
      whileHover="hover"
      variants={varHover(1)}
      transition={varTranHover()}
      sx={{ px: 1.5, cursor: 'pointer' }}
    >
      <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
        <Stack
          spacing={0.5}
          sx={{
            py: 3,
            width: 1,
            zIndex: 9,
            bottom: 0,
            textAlign: 'center',
            position: 'absolute',
            color: 'common.white',
          }}
        >
          <m.div variants={varHover(1.05)} transition={varTranHover()}>
            <Typography variant="h6">{title}</Typography>
          </m.div>

          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            En recherche de partenaires
          </Typography>
        </Stack>

        <StyledOverlay />

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image alt={title} src={image} ratio="4/3" />
        </m.div>
      </Box>
    </Box>
  );
}
