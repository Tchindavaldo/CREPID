// @mui
import { Typography, Container, Stack, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const INCLUDES = [
  'Diagnostic participatif et renforcement des capacités des organisations paysannes',
  'Accompagnement au processus d\'organisation et d\'autopromotion des populations démunies',
  'Accompagnement à l\'organisation et professionnalisation des producteurs',
  'Conception et réalisation d\'outils de communication',
  'Épargne, microcrédits et financement des microprojets ruraux et urbains',
  'Genre et Développement',
  'Développement de la pêche et de l\'aquaculture',
  'Gestion durable des ressources naturelles',
  'Protection de l\'environnement',
];

// ----------------------------------------------------------------------

export default function CrepidServicesInclude() {
  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: 'background.neutral',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 5, md: 10 }}
      >
        <Stack spacing={3} sx={{ flex: 1 }}>
          <Typography variant="h3">Ce que nous offrons</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Le CREPID propose une gamme complète de services pour accompagner les populations 
            et organisations dans leur développement.
          </Typography>

          <List>
            {INCLUDES.map((item) => (
              <ListItem key={item} disableGutters>
                <ListItemIcon>
                  <Iconify
                    icon="carbon:checkmark-outline"
                    sx={{ color: 'primary.main', width: 24, height: 24 }}
                  />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Stack>

        <Box
          sx={{
            flex: 1,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Image
            alt="services include"
            src="/assets/images/travel/travel_post_05.jpg"
            ratio="4/3"
          />
        </Box>
      </Stack>
    </Container>
  );
}
