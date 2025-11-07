// @mui
import { Typography, Container, Stack, Box } from '@mui/material';
// types
import { ITeamMemberProps } from 'src/types/team';
//
import TeamTravel from '../../team/travel';

// ----------------------------------------------------------------------

const EXPERTISE = [
  'Ingénieurs Agro-économistes (ENSA Dschang)',
  'Ingénieurs Zootechniciens spécialisés en aquaculture',
  'Ingénieurs Agronomes en productions végétales',
  'Ingénieurs du Génie Rural',
  'Ingénieurs des eaux, forêt, faune et chasse',
  'Ingénieurs en Agro-Industrie',
  'Experts en mécanique de fabrication',
  'Cadres techniques de développement',
];

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function CrepidLandingEquipe({ members }: Props) {
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
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Notre Force
        </Typography>

        <Typography variant="h2">Nos Ressources et Équipe</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Une équipe pluridisciplinaire avec plus de 17 ans d'expérience au service du développement
          local et durable.
        </Typography>
      </Stack>

      {/* Expertise */}
      <Box
        sx={{
          mb: { xs: 8, md: 10 },
          p: 4,
          borderRadius: 2,
          bgcolor: 'background.neutral',
        }}
      >
        <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
          Nos Expertises
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {EXPERTISE.map((expertise) => (
            <Stack
              key={expertise}
              direction="row"
              spacing={1}
              alignItems="flex-start"
              sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 1 }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  mt: 1,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  flexShrink: 0,
                }}
              />
              <Typography variant="body2">{expertise}</Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
