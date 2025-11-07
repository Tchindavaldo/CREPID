// @mui
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const MISSIONS = [
  {
    title: 'Renforcement des capacités',
    description: 'Renforcer les capacités des populations cibles pour la promotion d\'un développement durable',
    icon: 'carbon:skill-level-advanced',
  },
  {
    title: 'Accompagnement',
    description: 'Accompagner les structures et Institutions dans la recherche de l\'efficacité',
    icon: 'carbon:partnership',
  },
  {
    title: 'Formation pratique',
    description: 'Former par la pratique - Learning by doing',
    icon: 'carbon:education',
  },
];

// ----------------------------------------------------------------------

export default function CrepidAboutMission() {
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
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="h2">Notre Mission</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Le CREPID est une organisation qui lutte contre la pauvreté par la promotion du bien-être social, 
          la protection de l'environnement et la promotion des activités génératrices de revenus notamment 
          au sein des couches sociales les plus défavorisées.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {MISSIONS.map((mission) => (
          <Card
            key={mission.title}
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
                width: 80,
                height: 80,
                mx: 'auto',
                display: 'flex',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.lighter',
                color: 'primary.main',
                mb: 3,
              }}
            >
              <Iconify icon={mission.icon} width={40} />
            </Box>

            <Typography variant="h5" sx={{ mb: 2 }}>
              {mission.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              {mission.description}
            </Typography>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
