// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Stack, Container, Box } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  backgroundColor: alpha(theme.palette.common.black, 0.24),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function CrepidServicesHero() {
  return (
    <Box
      sx={{
        minHeight: 560,
        overflow: 'hidden',
        position: 'relative',
        ...bgGradient({
          startColor: `${alpha('#000', 0)} 0%`,
          endColor: `${alpha('#000', 0.8)} 75%`,
        }),
      }}
    >
      <Image
        alt="services"
        src="/assets/images/travel/travel_post_04.jpg"
        sx={{
          width: 1,
          height: 560,
          position: 'absolute',
        }}
      />

      <Container
        sx={{
          py: 15,
          height: 1,
          position: 'relative',
          zIndex: 9,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 520,
            color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
            mx: { xs: 'auto', md: 'unset' },
          }}
        >
          <Typography variant="h1">Nos Services</Typography>

          <Typography sx={{ opacity: 0.8 }}>
            Secteurs d'intervention du CREPID pour un développement durable
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
