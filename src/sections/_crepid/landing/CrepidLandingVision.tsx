// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Container, Stack, Box, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const ROWS = [
  'Promotion du bien-être social',
  'Protection de l\'environnement',
  'Activités génératrices de revenus',
  'Formation pratique et accompagnement',
  'Développement durable et intégré',
  'Lutte contre la pauvreté',
];

const VISION_ITEMS = [
  {
    title: 'Accès à l\'eau potable',
    description: 'L\'eau est-elle réellement la vie ?',
    image: '/assets/images/crepid/vision ambition/image.png',
  },
  {
    title: 'Développement rural',
    description: 'Promotion des activités génératrices de revenus',
    image: '/assets/images/crepid/vision ambition/image2.png',
  },
  {
    title: 'Protection environnement',
    description: 'Gestion durable des ressources naturelles',
    image: '/assets/images/crepid/vision ambition/Protection environnementale.png',
  },
  {
    title: 'Bien-être social',
    description: 'Lutte contre la pauvreté',
    image: '/assets/images/crepid/vision ambition/Bien-être social.png',
  },
];

export const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function CrepidLandingVision() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid
        container
        rowSpacing={{ xs: 8, md: 0 }}
        columnSpacing={{ xs: 0, md: 3 }}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Grid xs={12} md={4}>
          <Typography variant="h2">La Vision et les Ambitions du CREPID</Typography>

          <Typography variant="h5" sx={{ my: 3, color: 'error.main', fontStyle: 'italic' }}>
            L'eau est-elle réellement la vie ???
          </Typography>

          <Typography sx={{ mb: 3, color: 'text.secondary' }}>
            Alors qu'au 21e siècle l'être humain continue à boire l'eau des marres et des torrents ??
          </Typography>

          <Typography sx={{ mb: 3, color: 'text.secondary' }}>
            Le CREPID est une organisation qui lutte contre la pauvreté par la promotion du bien-être social, 
            la protection de l'environnement et la promotion des activités génératrices de revenus notamment 
            au sein des couches sociales les plus défavorisées.
          </Typography>

          <Stack spacing={2}>
            {ROWS.map((line) => (
              <Stack key={line} direction="row" alignItems="center" sx={{ typography: 'body1' }}>
                <Box
                  sx={{
                    mr: 2,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                  }}
                />
                {line}
              </Stack>
            ))}
          </Stack>
        </Grid>

        <Grid container xs={12} md={6} spacing={{ xs: 4, md: 3 }}>
          {VISION_ITEMS.map((item, index) => (
            <Grid
              key={item.title}
              xs={12}
              sm={6}
              sx={{
                ...(index === 1 && {
                  display: { md: 'inline-flex' },
                  alignItems: { md: 'flex-end' },
                }),
              }}
            >
              <VisionItem item={item} order={index % 3} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

// ----------------------------------------------------------------------

type VisionItemProps = {
  item: {
    title: string;
    description: string;
    image: string;
  };
  order: number;
};

function VisionItem({ item, order }: VisionItemProps) {
  const isMdUp = useResponsive('up', 'md');

  const { title, description, image } = item;

  return (
    <Box
      sx={{
        width: 1,
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >


      <Image
        alt={title}
        src={image}
        ratio={(!isMdUp && '1/1') || (order && '1/1') || '4/6'}
      />

      <Stack
        spacing={1}
        sx={{
          p: 3,
          left: 0,
          bottom: 0,
          zIndex: 9,
          color: 'common.white',
          position: 'absolute',
        }}
      >
        <TextMaxLine variant="h5" line={1}>
          {title}
        </TextMaxLine>

        <Stack direction="row" alignItems="center">
          <Iconify icon="carbon:location" sx={{ mr: 1, color: 'primary.main' }} />
          <TextMaxLine variant="body2" line={1} sx={{ opacity: 0.72 }}>
            {description}
          </TextMaxLine>
        </Stack>
      </Stack>
    </Box>
  );
}
