// @mui
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const BENEFICIAIRES = [
  {
    title: 'Entrepreneurs et entreprises',
    description: 'Structures qui emploient des personnes pour transformer de la matière première. Amélioration de la chaîne de production et gestion des ressources humaines.',
    icon: 'carbon:enterprise',
    color: 'primary' as const,
  },
  {
    title: 'ONG et projets de développement',
    description: 'Projets de coopération pour le développement. Prestations en études, suivi, évaluation et renforcement des capacités.',
    icon: 'carbon:partnership',
    color: 'secondary' as const,
  },
  {
    title: 'Organisations de producteurs',
    description: 'GIC, Associations, coopératives. Formation en gestion, élaboration de plans d\'action, suivi et évaluation.',
    icon: 'carbon:collaborate',
    color: 'success' as const,
  },
  {
    title: 'Collectivités locales',
    description: 'Accompagnement dans la conception, mise en œuvre et suivi de plans de développement local.',
    icon: 'carbon:location-company',
    color: 'warning' as const,
  },
  {
    title: 'Jeunes en reconversion',
    description: 'Jeunes en déperdition scolaire. Accompagnement au processus d\'auto-emploi et formation pratique.',
    icon: 'carbon:user-follow',
    color: 'info' as const,
  },
  {
    title: 'Femmes et genre',
    description: 'Autonomisation des femmes, actions agricoles féminines et inclusion dans la sphère économique.',
    icon: 'carbon:user-avatar',
    color: 'error' as const,
  },
];

// ----------------------------------------------------------------------

export default function CrepidLandingBeneficiaires() {
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
          Notre Public Cible
        </Typography>

        <Typography variant="h2">Nos Bénéficiaires</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Le CREPID accompagne divers acteurs du développement : entrepreneurs, organisations, 
          collectivités, jeunes et femmes dans leur démarche d'autopromotion.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {BENEFICIAIRES.map((beneficiaire) => (
          <Card
            key={beneficiaire.title}
            sx={{
              p: 4,
              textAlign: 'center',
              transition: 'all 0.3s',
              '&:hover': {
                boxShadow: (theme) => theme.customShadows.z24,
                transform: 'translateY(-8px)',
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                mx: 'auto',
                mb: 3,
                display: 'flex',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: `${beneficiaire.color}.lighter`,
                color: `${beneficiaire.color}.main`,
              }}
            >
              <Iconify icon={beneficiaire.icon} width={40} />
            </Box>

            <Typography variant="h5" sx={{ mb: 2 }}>
              {beneficiaire.title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {beneficiaire.description}
            </Typography>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
