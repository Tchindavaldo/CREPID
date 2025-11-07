import { useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Stack, Typography, Button, Box, Container } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import ImageCarousel from 'src/components/carousel/ImageCarousel';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${alpha(theme.palette.common.black, 0.5)} 75%`,
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

const HERO_IMAGES = [
  '/assets/images/crepid/hero/image.png',
  '/assets/images/crepid/hero/image copy.png',
  '/assets/images/crepid/hero/image copy 2.png',
  '/assets/images/crepid/hero/image copy 3.png',
];

export default function CrepidLandingHero() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <StyledOverlay />

      <Box
        sx={{
          position: 'absolute',
          width: 1,
          height: '100vh',
        }}
      >
        <Box
          sx={{
            '& .slick-list': {
              height: '100vh',
            },
            '& img': {
              height: '100vh',
              objectFit: 'cover',
            },
          }}
        >
          <ImageCarousel images={HERO_IMAGES} autoPlay autoPlaySpeed={5000} imageOrigin="hero" />
        </Box>
      </Box>

      <Container
        sx={{
          py: { xs: 10, md: 0 },
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 9,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 720,
            color: 'common.white',
            textAlign: 'left',
            mx: 0,
          }}
        >
          <Typography variant="overline" sx={{ color: 'primary.light', opacity: 0.8 }}>
            CREPID
          </Typography>

          <Typography variant="h1" sx={{ fontSize: { xs: 32, md: 64 } }}>
            Former, innover, produire
            <br />
            <Box component="span" sx={{ color: 'primary.main' }}>
              Le développement par la pratique
            </Box>
          </Typography>

          <Typography sx={{ fontSize: { xs: 16, md: 20 }, opacity: 0.9 }}>
            Incubateur de formation aux métiers agro-pastoraux et artisanaux, suivant le principe du
            "learning by doing"
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              '& > *': {
                flexShrink: 0,
              },
            }}
          >
            <Button
              size="large"
              variant="contained"
              color="primary"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              Découvrir nos formations
            </Button>

            <Button
              size="large"
              variant="outlined"
              sx={{
                color: 'common.white',
                borderColor: alpha('#fff', 0.48),
                '&:hover': {
                  borderColor: 'common.white',
                  bgcolor: alpha('#fff', 0.08),
                },
                display: { xs: 'none', md: 'inline-flex' },
              }}
            >
              En savoir plus
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
