// @mui
import { Box, Container, Typography, Stack, Card, Grid, alpha, Unstable_Grid2 as Grid2 } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const FORMATIONS = [
  {
    title: 'Formation en Apiculture',
    description: 'Techniques modernes d\'élevage d\'abeilles et de production de miel',
    icon: 'carbon:bee',
    color: 'warning',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/Rucher et récolte du miel.png',
    details: [
      'Installation et gestion de ruches',
      'Récolte et transformation du miel',
      'Commercialisation des produits apicoles',
    ],
  },
  {
    title: 'Formation en Aviculture',
    description: 'Élevage de poules pondeuses et poulets de chair',
    icon: 'carbon:agriculture',
    color: 'error',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/avicole 1.png',
    details: [
      'Construction et aménagement de poulaillers',
      'Alimentation et soins vétérinaires',
      'Gestion sanitaire et prophylaxie',
    ],
  },
  {
    title: 'Formation en Production Porcine',
    description: 'Élevage de porcs de race Naïma et gestion de porcherie',
    icon: 'carbon:agriculture-analytics',
    color: 'info',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/porc Race Landrace.png',
    details: [
      'Reproduction et sélection génétique',
      'Alimentation rationnelle',
      'Gestion technico-économique',
    ],
  },
  {
    title: 'Formation en Aquaculture',
    description: 'Pisciculture intégrée et gestion durable des ressources',
    icon: 'carbon:fish',
    color: 'primary',
    image: '/assets/images/crepid/Domaines d\'Intervention/Pêche et aquaculture/image.png',
    details: [
      'Aménagement d\'étangs piscicoles',
      'Techniques d\'élevage de poissons',
      'Intégration agriculture-élevage-pisciculture',
    ],
  },
  {
    title: 'Formation en Maraîchage',
    description: 'Production de légumes et cultures maraîchères',
    icon: 'carbon:plant',
    color: 'success',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_1.png',
    details: [
      'Préparation des sols et semis',
      'Techniques culturales modernes',
      'Gestion de l\'eau et irrigation',
    ],
  },
  {
    title: 'Formation en Arboriculture',
    description: 'Culture d\'avocatiers, bananiers plantain et autres fruitiers',
    icon: 'carbon:tree',
    color: 'secondary',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_4.png',
    details: [
      'Plantation et entretien des vergers',
      'Taille et greffage',
      'Récolte et conservation des fruits',
    ],
  },
  {
    title: 'Gestion d\'Entreprise Agricole',
    description: 'Formation en entrepreneuriat et gestion de projets agricoles',
    icon: 'carbon:business-processes',
    color: 'warning',
    image: '/assets/images/crepid/Domaines d\'Intervention/Développement organisationnel/image2.png',
    details: [
      'Élaboration de plans d\'affaires',
      'Gestion financière et comptable',
      'Marketing et commercialisation',
    ],
  },
  {
    title: 'Transformation Agro-alimentaire',
    description: 'Techniques de transformation et valorisation des produits',
    icon: 'carbon:data-enrichment',
    color: 'info',
    image: '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_5.png',
    details: [
      'Conservation et conditionnement',
      'Normes d\'hygiène et qualité',
      'Création de valeur ajoutée',
    ],
  },
];

const IMAGES = [
  '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/Rucher et récolte du miel.png',
  '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/avicole 1.png',
  '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques animale/porc Race Landrace.png',
  '/assets/images/crepid/Domaines d\'Intervention/Pêche et aquaculture/image.png',
];

const STATS = [
  { name: 'Formations offertes', number: 8 },
  { name: 'Producteurs formés', number: 390 },
  { name: 'Fermes d\'application', number: 3 },
  { name: 'Années d\'expérience', number: 17 },
];

// ----------------------------------------------------------------------

export default function CrepidFormationsView() {
  const isSmUp = useResponsive('up', 'sm');

  return (
    <>
      {/* Hero Section with Title */}
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
          <Typography variant="h1">Nos Formations Pratiques</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Le CREPID offre des formations pratiques dans divers domaines agro-pastoraux et artisanaux.
            Nos formations sont conçues pour transmettre des compétences techniques et entrepreneuriales
            aux producteurs.
          </Typography>
        </Stack>

        {/* Hero Images Grid */}
        <Grid2 container spacing={3}>
          {(isSmUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
            <Grid2 key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
              <Image alt={`formation-${index}`} src={img} sx={{ height: 350, borderRadius: 2 }} />
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
      </Container>

      {/* Formations Grid */}
      <Container sx={{ py: { xs: 10, md: 15 } }}>
        <Grid container spacing={4}>
          {FORMATIONS.map((formation, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
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
                    src={formation.image}
                    alt={formation.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                {/* Content */}
                <Box sx={{ position: 'relative', zIndex: 2, p: 4 }}>
                  <Stack spacing={3}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        display: 'flex',
                        borderRadius: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: (theme) => alpha(theme.palette[formation.color].main, 0.08),
                        color: `${formation.color}.main`,
                      }}
                    >
                      <Iconify icon={formation.icon} width={32} />
                    </Box>

                    <Stack spacing={2}>
                      <Typography variant="h5" sx={{ color: 'common.white', fontWeight: 'bold' }}>
                        {formation.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'common.white' }}>
                        {formation.description}
                      </Typography>
                    </Stack>

                  <Stack spacing={1}>
                    {formation.details.map((detail, idx) => (
                      <Stack key={idx} direction="row" spacing={1} alignItems="flex-start">
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            mt: 1,
                            borderRadius: '50%',
                            bgcolor: 'common.white',
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: 'common.white' }}>
                          {detail}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'background.neutral', py: { xs: 10, md: 15 } }}>
        <Container>
          <Stack spacing={3} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Intéressé par nos formations ?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Contactez-nous pour plus d'informations sur nos programmes de formation et les modalités d'inscription.
            </Typography>
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              Email : contact@crepid.org
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
