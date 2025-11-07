// @mui
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const SERVICES_DETAILS = [
  {
    title: 'Accompagnement au montage de projets',
    description: 'Diagnostics participatifs, élaboration de stratégies de développement, recherche-action et élaboration de projets de développement.',
    icon: 'carbon:document',
  },
  {
    title: 'Formations pratiques',
    description: 'Formation dans divers domaines agricoles (avocatier, maïs, banane plantain), d\'élevage (porcin, aviculture, apiculture) et d\'artisanat.',
    icon: 'carbon:education',
  },
  {
    title: 'Suivi et évaluation',
    description: 'Accompagnement à la formulation, mise en œuvre et suivi-évaluation des projets de développement.',
    icon: 'carbon:analytics',
  },
  {
    title: 'Études et recherches',
    description: 'Promotion des technologies innovantes dans la gestion des ressources naturelles, le bâtiment et la transformation des produits forestiers.',
    icon: 'carbon:research',
  },
  {
    title: 'Animation et formations',
    description: 'Organisation de réflexions, ateliers d\'échanges et formations sur la planification stratégique et opérationnelle.',
    icon: 'carbon:presentation-file',
  },
  {
    title: 'Développement organisationnel',
    description: 'Accompagnement des organisations dans l\'utilisation rationnelle de leurs ressources internes et externes.',
    icon: 'carbon:enterprise',
  },
];

// ----------------------------------------------------------------------

export default function CrepidServicesDetails() {
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
        <Typography variant="h2">Secteurs d'Intervention</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Le CREPID intervient dans plusieurs domaines clés pour accompagner les populations, 
          organisations et institutions dans leur développement.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES_DETAILS.map((service, index) => (
          <Card
            key={service.title}
            sx={{
              p: 4,
              '&:hover': {
                boxShadow: (theme) => theme.customShadows.z24,
              },
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                display: 'flex',
                borderRadius: 2,
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.lighter',
                color: 'primary.main',
                mb: 3,
              }}
            >
              <Iconify icon={service.icon} width={32} />
            </Box>

            <Typography variant="h5" sx={{ mb: 2 }}>
              {service.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              {service.description}
            </Typography>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
