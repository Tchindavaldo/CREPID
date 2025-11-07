// @mui
import { Box, Container, Typography, Stack, Unstable_Grid2 as Grid, alpha } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Formation Agro-pastorale',
    description: 'Formations pratiques en apiculture, aviculture, production porcine, aquaculture et maraîchage',
    icon: 'carbon:education',
  },
  {
    title: 'Accompagnement de Projets',
    description: 'Diagnostic, élaboration de plans d\'affaires et suivi-évaluation de projets agricoles',
    icon: 'carbon:task-complete',
  },
  {
    title: 'Gestion des Ressources',
    description: 'Gestion durable des ressources naturelles et protection de l\'environnement',
    icon: 'carbon:earth',
  },
  {
    title: 'Développement Rural',
    description: 'Appui aux organisations de producteurs et promotion d\'activités génératrices de revenus',
    icon: 'carbon:agriculture',
  },
  {
    title: 'Recherche & Innovation',
    description: 'Recherche appliquée et développement de solutions innovantes pour l\'agriculture',
    icon: 'carbon:innovation',
  },
  {
    title: 'Partenariats Productifs',
    description: 'Facilitation de partenariats entre producteurs, entrepreneurs et institutions financières',
    icon: 'carbon:partnership',
  },
];

const FEATURES = [
  'Fermes d\'application modernes',
  'Formateurs expérimentés',
  'Approche pratique et participative',
  'Suivi post-formation',
];

// ----------------------------------------------------------------------

export default function CrepidServicesView() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
        }}
      >
        <Container>
          <Stack spacing={3} sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h1">Nos Services</Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
              Le CREPID offre une gamme complète de services pour le développement rural et durable
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Depuis plus de 17 ans, nous accompagnons les producteurs et les organisations dans leurs projets
              de développement agricole et pastoral.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Main Service Section */}
      <Container
        sx={{
          pt: { xs: 10, md: 15 },
          pb: { xs: 5, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid xs={12} md={6} lg={5}>
            <Image
              alt="services"
              src="/assets/images/travel/travel_post_01.jpg"
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Stack spacing={3} sx={{ mb: 5 }}>
              <Typography variant="h2">Formation et Accompagnement</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Le CREPID est un incubateur de formation aux métiers agro-pastoraux et artisanaux.
                Nous offrons des formations pratiques basées sur l'expérience de nos fermes d'application
                et l'expertise de nos formateurs.
              </Typography>

              <Stack spacing={2}>
                {FEATURES.map((text) => (
                  <Stack key={text} direction="row" alignItems="center">
                    <Box
                      component="span"
                      sx={{
                        mr: 2,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                      }}
                    />
                    {text}
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Services Grid */}
      <Container
        sx={{
          textAlign: 'center',
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 15 },
        }}
      >
        <Typography variant="h2">Nos Domaines d'Intervention</Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            maxWidth: 480,
            color: 'text.secondary',
            mb: { xs: 8, md: 10 },
          }}
        >
          Le CREPID intervient dans plusieurs domaines pour accompagner le développement rural intégré et durable.
        </Typography>

        <Box
          sx={{
            rowGap: 8,
            columnGap: 10,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {SERVICES.map((service) => (
            <div key={service.title}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  display: 'flex',
                  borderRadius: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                  color: 'primary.main',
                }}
              >
                <Iconify icon={service.icon} width={32} />
              </Box>

              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {service.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>{service.description}</Typography>
            </div>
          ))}
        </Box>
      </Container>
    </>
  );
}
