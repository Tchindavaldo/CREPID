// @mui
import { Box, Container, Typography, Stack, Unstable_Grid2 as Grid2, alpha } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const IMAGES = [
  '/assets/images/crepid/Domaines d\'Intervention/Animation et formations/image.png',
  '/assets/images/crepid/Domaines d\'Intervention/Développement organisationnel/image1.png',
  '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_1.png',
  '/assets/images/crepid/Domaines d\'Intervention/Professionnalisation producteurs/watering-1501209_1920.webp',
];

const STATS = [
  { name: 'Années d\'expérience', number: 17 },
  { name: 'Producteurs formés', number: 390 },
  { name: 'Projets réalisés', number: 200 },
  { name: 'Partenaires', number: 15 },
];

const MISSION_POINTS = [
  'Lutter contre la pauvreté',
  'Promouvoir le bien-être social',
  'Protéger l\'environnement',
  'Développer des activités génératrices de revenus',
];

// ----------------------------------------------------------------------

export default function CrepidAboutView() {
  const isSmUp = useResponsive('up', 'sm');

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
          <Typography variant="h1">À Propos du CREPID</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Centre de Recherche et d'Expertise pour le Développement Intégré et Durable.
            Un incubateur de formation aux métiers agro-pastoraux et artisanaux.
          </Typography>
        </Stack>

        {/* Hero Images Grid */}
        <Grid2 container spacing={3}>
          {(isSmUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
            <Grid2 key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
              <Image alt={`about-${index}`} src={img} sx={{ height: 350, borderRadius: 2 }} />
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
          {STATS.map((value) => (
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

        {/* Mission & Vision */}
        <Grid2
          container
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid2 xs={12} md={6} lg={5}>
            <Box
              sx={{
                mb: 2,
                width: 24,
                height: 3,
                borderRadius: 3,
                bgcolor: 'primary.main',
                mx: { xs: 'auto', md: 0 },
              }}
            />
            <Typography variant="h3" sx={{ mb: 3 }}>
              Notre Mission
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 3 }}>
              Le CREPID est une organisation qui lutte contre la pauvreté par la promotion du bien-être social,
              la protection de l'environnement et la promotion des activités génératrices de revenus notamment
              au sein des couches sociales les plus défavorisées.
            </Typography>

            <Stack spacing={2}>
              {MISSION_POINTS.map((point) => (
                <Stack key={point} direction="row" alignItems="center" spacing={2}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="body1">{point}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid2>

          <Grid2 xs={12} md={6} lg={6}>
            <Box
              sx={{
                mb: 2,
                width: 24,
                height: 3,
                borderRadius: 3,
                bgcolor: 'primary.main',
                mx: { xs: 'auto', md: 0 },
              }}
            />
            <Typography variant="h3" sx={{ mb: 3 }}>
              Notre Vision
            </Typography>

            <Typography variant="h5" sx={{ color: 'error.main', fontStyle: 'italic', mb: 2 }}>
              L'eau est-elle réellement la vie ???
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 3 }}>
              Alors qu'au 21e siècle l'être humain continue à boire l'eau des marres et des torrents,
              le CREPID œuvre pour un développement intégré et durable qui améliore les conditions de vie
              des populations rurales.
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Nous croyons en un développement qui respecte l'environnement, valorise les ressources locales
              et renforce les capacités des communautés à prendre en charge leur propre développement.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>

      {/* Values Section */}
      <Box sx={{ bgcolor: 'background.neutral', py: { xs: 10, md: 15 } }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 8 }}>
            Nos Valeurs
          </Typography>

          <Grid2 container spacing={4}>
            {[
              {
                icon: 'carbon:education',
                title: 'Formation Pratique',
                description: 'Transmission de compétences techniques et entrepreneuriales',
              },
              {
                icon: 'carbon:partnership',
                title: 'Partenariat',
                description: 'Collaboration avec des acteurs locaux et internationaux',
              },
              {
                icon: 'carbon:earth',
                title: 'Durabilité',
                description: 'Gestion responsable des ressources naturelles',
              },
              {
                icon: 'carbon:innovation',
                title: 'Innovation',
                description: 'Recherche et développement de solutions adaptées',
              },
            ].map((value) => (
              <Grid2 key={value.title} xs={12} sm={6} md={3}>
                <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      display: 'flex',
                      borderRadius: 2,
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                      color: 'primary.main',
                    }}
                  >
                    <Iconify icon={value.icon} width={32} />
                  </Box>
                  <Typography variant="h6">{value.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {value.description}
                  </Typography>
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </>
  );
}
