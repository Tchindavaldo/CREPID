// @mui
import { Box, Container, Typography, Stack, Paper, Grid, alpha, Chip, Avatar, Card, IconButton, Unstable_Grid2 as Grid2 } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';
import { useRef } from 'react';

// ----------------------------------------------------------------------

const REALISATIONS = [
  {
    domaine: 'Gestion des conflits entre agriculteurs et éleveurs',
    partenaire: 'PIDMA - Coopération Mondiale',
    realisation: 'Mise en place d\'une stratégie de gestion des conflits éleveurs-agriculteurs suivant l\'approche des Cercles de Caution Solidaires',
    icon: 'carbon:partnership',
    color: 'primary',
    image: '/assets/images/crepid/Domaines d\'Intervention/Développement organisationnel/image1.png',
  },
  {
    domaine: 'Diagnostique et accompagnement des OP',
    partenaire: 'PACA - Coopération Mondiale',
    realisation: '163 sous-projets, dont 75 en filières productions animales (42 en production porcine et 33 en aviculture)',
    icon: 'carbon:document-tasks',
    color: 'info',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/porc Race Landrace.png',
  },
  {
    domaine: 'Appui aux organisations de producteurs',
    partenaire: 'ASSAMBA - CEPAB',
    realisation: '28 sous-projets d\'élevage dont 10 en production porcine, 10 en aviculture, 5 en apiculture et 3 en aquaculture intégrée',
    icon: 'carbon:document-tasks',
    color: 'success',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/avicole 1.png',
  },
  {
    domaine: 'Production et vulgarisation',
    partenaire: 'CREPID - Particuliers',
    realisation: 'Élevage des porcs de race naïma ; Production et vulgarisation de 140 géniteurs porcins de race naïma dans la localité de Wang/Dja par Dschang',
    icon: 'carbon:agriculture',
    color: 'warning',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/porc Race Large white ou yorkshire.png',
  },
  {
    domaine: 'Complexe d\'élevage intégré',
    partenaire: 'CREPID - Diocèse de Bafoussam',
    realisation: 'Projet de complexe d\'élevage de Foumbot comprenant les volets aviculture, apiculture et aquaculture intégrée à la production porcine',
    icon: 'carbon:agriculture-analytics',
    color: 'error',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/Rucher et récolte du miel.png',
  },
  {
    domaine: 'Formation et accompagnement',
    partenaire: 'PACA - Coopération Mondiale',
    realisation: '40 Opérateurs d\'Appui Locaux (OAL) formés dans la formulation des plans d\'affaires, et accompagnés dans leur mise en œuvre',
    icon: 'carbon:education',
    color: 'secondary',
    image: '/assets/images/crepid/Domaines d\'Intervention/Animation et formations/image.png',
  },
  {
    domaine: 'Fermes d\'application',
    partenaire: 'CREPID',
    realisation: 'Gestion de 3 fermes d\'application (01 en Apiculture, 01 en Aviculture et 01 en production porcine) : 390 producteurs formés',
    icon: 'carbon:education',
    color: 'primary',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_1.png',
  },
  {
    domaine: 'Aménagement de fermes bovines',
    partenaire: 'CREPID - UAPI',
    realisation: 'Diagnostique et proposition d\'un plan d\'aménagement pour 10 fermes d\'élevage bovin',
    icon: 'carbon:farm',
    color: 'info',
    image: '/assets/images/crepid/Domaines d\'Intervention/Professionnalisation producteurs/watering-1501209_1920.webp',
  },
  {
    domaine: 'Protection des zones de montagne',
    partenaire: 'Diocèse de Bafoussam - CEPAB',
    realisation: 'Contribution à l\'aménagement et à la protection de 08 zones marginales de montagne pour son exploitation en pâturage',
    icon: 'carbon:mountain',
    color: 'success',
    image: '/assets/images/crepid/Domaines d\'Intervention/Gestion durable des ressources naturelles/image.png',
  },
  {
    domaine: 'Aménagement des pâturages',
    partenaire: 'CREPID - Diocèse de Bafoussam',
    realisation: 'Diagnostique et proposition d\'un plan d\'aménagement pour une ferme bovine à Galim',
    icon: 'carbon:farm',
    color: 'warning',
    image: '/assets/images/crepid/Domaines d\'Intervention/Gestion durable des ressources naturelles/image2.png',
  },
  {
    domaine: 'Gestion durable des ressources',
    partenaire: 'CREPID',
    realisation: 'Conception et développement d\'un projet de recherche sur la gestion durable des ressources naturelles, impact des pratiques piscicoles et agro-sylvicoles',
    icon: 'carbon:earth',
    color: 'error',
    image: '/assets/images/crepid/Domaines d\'Intervention/Gestion durable des ressources naturelles/image copy.png',
  },
  {
    domaine: 'Partenariats productifs',
    partenaire: 'PACA - Coopération Mondiale',
    realisation: '70 contrats de partenariat OP-Entrepreneurs, OP-Fournisseurs d\'intrants, OP-établissements de Microfinances (EMF) négociés et signés',
    icon: 'carbon:partnership',
    color: 'secondary',
    image: '/assets/images/crepid/Domaines d\'Intervention/Développement organisationnel/image2.png',
  },
];

const IMAGES = [
  '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/Rucher et récolte du miel.png',
  '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/avicole 1.png',
  '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_1.png',
  '/assets/images/crepid/Domaines d\'Intervention/Pêche et aquaculture/image.png',
];

const STATS_DATA = [
  { name: 'Années d\'expérience', number: 17 },
  { name: 'Producteurs formés', number: 390 },
  { name: 'Projets réalisés', number: 200 },
  { name: 'Partenaires actifs', number: 15 },
];

// ----------------------------------------------------------------------

export default function CrepidRealisationsView() {
  const isSmUp = useResponsive('up', 'sm');
  
  const carouselRef = useRef<any>(null);

  const carouselSettings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      { breakpoint: 1279, settings: { slidesToShow: 3, slidesToScroll: 3, swipe: true } },
      { breakpoint: 959, settings: { slidesToShow: 2, slidesToScroll: 2, swipe: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, swipe: true } },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <>
      {/* Hero Section with Images */}
      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 15, md: 20 },
          pb: 5,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 560,
            textAlign: 'center',
            pb: { xs: 5, md: 10 },
          }}
        >
          <Typography variant="h1">Nos Réalisations</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Plus de 17 ans d'expérience au service du développement rural et durable.
            Le CREPID a collaboré avec de nombreux partenaires nationaux et internationaux.
          </Typography>
        </Stack>

        {/* Hero Images Grid */}
        <Grid2 container spacing={3}>
          {(isSmUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
            <Grid2 key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
              <Image alt={`realisation-${index}`} src={img} sx={{ height: 350, borderRadius: 2 }} />
            </Grid2>
          ))}
        </Grid2>

        {/* Stats Section */}
        <Box
          sx={{
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            textAlign: 'center',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            pt: { xs: 5, md: 10 },
            pb: 10,
          }}
        >
          {STATS_DATA.map((value) => (
            <div key={value.name}>
              <Typography variant="h2" gutterBottom>
                <CountUp
                  start={value.number / 5}
                  end={value.number}
                  formattingFn={(newValue: number) => fShortenNumber(newValue)}
                />

                <Typography
                  variant="h4"
                  component="span"
                  sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
                >
                  +
                </Typography>
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.name}
              </Typography>
            </div>
          ))}
        </Box>
      </Container>

      {/* Réalisations Carousel */}
      <Box sx={{ bgcolor: 'background.neutral', py: { xs: 10, md: 15 } }}>
        <Container>
          <Typography variant="h3" sx={{ mb: 8, textAlign: 'center' }}>
            Nos Principales Réalisations
          </Typography>

          <Box sx={{ position: 'relative' }}>
            <CarouselArrows
              onNext={handleNext}
              onPrev={handlePrev}
              leftButtonProps={{ sx: { left: -16 } }}
              rightButtonProps={{ sx: { right: -16 } }}
            >
              <Carousel ref={carouselRef} {...carouselSettings}>
                {REALISATIONS.map((realisation, index) => (
                  <Box key={index} sx={{ px: 1.5, pb: 2 }}>
                    <Card
                      sx={{
                        height: 450,
                        transition: 'all 0.3s',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          boxShadow: (theme) => theme.customShadows.z24,
                          transform: 'translateY(-8px)',
                        },
                      }}
                    >
                      {/* Background Image */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          zIndex: 0,
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: (theme) => `linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0.3)} 0%, ${alpha(theme.palette.common.black, 0.6)} 100%)`,
                            zIndex: 1,
                          },
                        }}
                      >
                        <Image
                          src={realisation.image}
                          alt={realisation.domaine}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </Box>

                      {/* Content */}
                      <Box sx={{ position: 'relative', zIndex: 2, p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              display: 'flex',
                              borderRadius: 1.5,
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: (theme) => alpha(theme.palette[realisation.color].main, 0.15),
                              color: `${realisation.color}.main`,
                            }}
                          >
                            <Iconify icon={realisation.icon} width={24} />
                          </Box>

                          <Stack spacing={1}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                minHeight: 56,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                color: 'common.white',
                                fontWeight: 'bold',
                              }}
                            >
                              {realisation.domaine}
                            </Typography>
                            <Chip
                              label={realisation.partenaire}
                              size="small"
                              color={realisation.color as 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'}
                              variant="soft"
                              sx={{ width: 'fit-content' }}
                            />
                          </Stack>

                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'common.white',
                              flexGrow: 1,
                              display: '-webkit-box',
                              WebkitLineClamp: 5,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {realisation.realisation}
                          </Typography>
                        </Stack>
                      </Box>
                    </Card>
                  </Box>
                ))}
              </Carousel>
            </CarouselArrows>
          </Box>
        </Container>
      </Box>


    </>
  );
}
