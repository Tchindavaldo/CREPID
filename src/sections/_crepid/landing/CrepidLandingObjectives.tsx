// @mui
import { Typography, Container, Stack, Box } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const OBJECTIVES = [
  {
    title: 'Innovations de développement',
    description: 'Concevoir et vulgariser des innovations au profit des populations bénéficiaires',
    icon: 'carbon:idea',
  },
  {
    title: "Esprit d'équipe",
    description: "Promouvoir l'autopromotion et l'échange au sein des organisations de producteurs",
    icon: 'carbon:collaborate',
  },
  {
    title: 'Initiatives de développement',
    description: 'Appuyer les initiatives émanant des Institutions ou des Collectivités',
    icon: 'carbon:growth',
  },
  {
    title: 'Bien-être social',
    description:
      "Promouvoir le bien-être par l'éducation, la nutrition, la santé et l'environnement",
    icon: 'carbon:health-cross',
  },
];

// ----------------------------------------------------------------------

export default function CrepidLandingObjectives() {
  return (
    <Container
      // sx={{
      //   bgcolor: 'common.white',
      //   py: { xs: 10, md: 15 },
      // }}
      sx={{
        textAlign: 'center',
        py: { xs: 5, md: 10 },
        bgcolor: 'background.neutral',
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 640,
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Objectifs Visés</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Le CREPID s'efforce de renforcer les capacités des populations cibles pour la promotion
          d'un développement durable. À travers des études, formations et des conseils, le CREPID
          accompagne aussi des structures et Institutions dans la recherche de l'efficacité et
          l'accroissement des performances.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 4, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {OBJECTIVES.map((objective) => (
          <Stack key={objective.title} spacing={2}>
            <Box
              sx={{
                width: 80,
                height: 80,
                mx: 'auto',
                display: 'flex',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                mb: 2,
              }}
            >
              <Iconify icon={objective.icon} width={40} />
            </Box>

            <Typography variant="h5">{objective.title}</Typography>

            <Typography sx={{ color: 'text.secondary' }}>{objective.description}</Typography>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}
