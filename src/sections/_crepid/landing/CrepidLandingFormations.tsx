// next
import NextLink from 'next/link';
// @mui
import { Typography, Stack, Container, Box, Button } from '@mui/material';
// types
import { ITourProps } from 'src/types/tour';
// components
import Iconify from 'src/components/iconify';
//
import { TravelTourItem } from '../../_travel/tour/item';

// ----------------------------------------------------------------------

const FORMATIONS = [
  {
    title: 'Verger d\'avocatiers',
    description: 'Culture à moindre risque et peu exigeante. Plus de 80 000FCFA à gagner par plant dès l\'année de croisière',
    location: 'Bansoa, Ouest Cameroun',
  },
  {
    title: 'Maïs de contre-saison',
    description: 'Production de semences de maïs avec accompagnement et conseil',
    location: 'Banock, Ouest Cameroun',
  },
  {
    title: 'Élevage porcin',
    description: 'Formation en conduite d\'exploitation porcine - Races Landrace et Large White',
    location: 'Fermes CREPID',
  },
  {
    title: 'Aviculture',
    description: 'Mise en place et formation en conduite d\'exploitations avicoles',
    location: 'Fermes CREPID',
  },
  {
    title: 'Apiculture',
    description: 'Formation complète en apiculture, de la ruche à la récolte du miel',
    location: 'Fermes CREPID',
  },
  {
    title: 'Bananier plantain',
    description: 'Production de banane plantain avec techniques modernes',
    location: 'Ferme pilote CREPID',
  },
  {
    title: 'Transformation des fruits',
    description: 'Transformation et conservation des fruits et autres produits agricoles',
    location: 'Atelier CREPID',
  },
  {
    title: 'Artisanat',
    description: 'Formation en mécanique de fabrication et valorisation du bambou',
    location: 'Ateliers CREPID',
  },
];

// ----------------------------------------------------------------------

type Props = {
  tours: ITourProps[];
};

export default function CrepidLandingFormations({ tours }: Props) {
  return (
    <Container
      sx={{
        py: { xs: 8, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mb: { xs: 8, md: 10 },
          mx: 'auto',
          maxWidth: 640,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2">Nos Formations Pratiques</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Le CREPID accueille les apprenants et les affecte immédiatement auprès des exploitations 
          de leur choix pour une formation essentiellement pratique. Learning by doing.
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
        {tours.slice(0, 8).map((tour, index) => (
          <TravelTourItem key={tour.id} tour={{
            ...tour,
            slug: `formation-${index + 1}`,
            location: FORMATIONS[index]?.location || tour.location,
            duration: '3-6 mois',
            priceSale: 0,
            price: 0,
            ratings: 5,
            reviews: 0,
          }} />
        ))}
      </Box>

      <Stack
        alignItems="center"
        sx={{
          mt: 8,
        }}
      >
        <Button
          component={NextLink}
          href="#"
          size="large"
          variant="outlined"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          Voir toutes les formations
        </Button>
      </Stack>
    </Container>
  );
}
