// @mui
import { Typography, Container, Stack, Box } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const IMPACT = [
  {
    total: 390,
    description: 'Producteurs formés',
    icon: '/assets/icons/travel/ic_travel_tickets.svg',
  },
  {
    total: 163,
    description: 'Sous-projets réalisés',
    icon: '/assets/icons/travel/ic_travel_booking.svg',
  },
  {
    total: 40,
    description: 'Consultants formés',
    icon: '/assets/icons/travel/ic_travel_site_visitors.svg',
  },
  {
    total: 17,
    description: 'Années d\'expérience',
    icon: '/assets/icons/travel/ic_travel_verified_hotels.svg',
  },
];

// ----------------------------------------------------------------------

export default function CrepidLandingImpact() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        py: { xs: 5, md: 10 },
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
        <Typography variant="h2">Notre Impact</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Depuis sa création, le CREPID a accompagné des centaines de producteurs et réalisé 
          de nombreux projets de développement dans diverses filières agro-pastorales.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 8, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {IMPACT.map((value) => (
          <Stack key={value.description} spacing={1}>
            <Image
              alt={value.icon}
              src={value.icon}
              sx={{ mb: 3, width: 80, height: 80, mx: 'auto' }}
            />

            <Typography variant="h3">
              <CountUp
                start={value.total / 5}
                end={value.total}
                formattingFn={(newValue: number) => fShortenNumber(newValue)}
              />
              +
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}
