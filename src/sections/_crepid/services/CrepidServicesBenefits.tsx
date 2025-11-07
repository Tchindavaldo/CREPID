// @mui
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Expertise reconnue',
    description: 'Plus de 17 ans d\'expérience avec une équipe d\'ingénieurs qualifiés',
    icon: 'carbon:certificate',
  },
  {
    title: 'Approche pratique',
    description: 'Formation par la pratique - Learning by doing',
    icon: 'carbon:tools',
  },
  {
    title: 'Accompagnement personnalisé',
    description: 'Suivi et encadrement adapté à chaque bénéficiaire',
    icon: 'carbon:user-follow',
  },
  {
    title: 'Résultats mesurables',
    description: '390+ producteurs formés, 163+ projets réalisés',
    icon: 'carbon:chart-line',
  },
];

// ----------------------------------------------------------------------

export default function CrepidServicesBenefits() {
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
        <Typography variant="h2">Pourquoi choisir le CREPID ?</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Le CREPID se distingue par son approche pratique et son expertise reconnue 
          dans l'accompagnement au développement rural et urbain.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {BENEFITS.map((benefit) => (
          <Card
            key={benefit.title}
            sx={{
              p: 4,
              textAlign: 'center',
              '&:hover': {
                boxShadow: (theme) => theme.customShadows.z24,
              },
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                display: 'flex',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'success.lighter',
                color: 'success.main',
                mb: 3,
              }}
            >
              <Iconify icon={benefit.icon} width={32} />
            </Box>

            <Typography variant="h6" sx={{ mb: 1 }}>
              {benefit.title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {benefit.description}
            </Typography>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
