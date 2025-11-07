// next
import NextLink from 'next/link';
// @mui
import { Stack, Container, Typography, Card, Box, IconButton } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;

const SERVICES = [
  {
    name: 'Accompagnement aux projets',
    icon: '/assets/icons/service/ic_service_seo.svg',
    content: 'Montage et mise en œuvre des projets de développement, diagnostics participatifs',
    path: '#',
  },
  {
    name: 'Formations pratiques',
    icon: '/assets/icons/service/ic_service_analysis.svg',
    content: 'Formation dans divers domaines agricoles, d\'élevage et d\'artisanat',
    path: '#',
  },
  {
    name: 'Suivi et évaluation',
    icon: '/assets/icons/service/ic_service_bullhorn.svg',
    content: 'Accompagnement à la formulation et au suivi des projets de développement',
    path: '#',
  },
  {
    name: 'Études et recherches',
    icon: '/assets/icons/service/ic_service_mail.svg',
    content: 'Promotion des technologies innovantes et recherche-action',
    path: '#',
  },
  {
    name: 'Développement organisationnel',
    icon: '/assets/icons/ic_popularity.svg',
    content: 'Accompagnement des organisations dans l\'utilisation rationnelle de leurs ressources',
    path: '#',
  },
  {
    name: 'Gestion des ressources',
    icon: '/assets/icons/ic_reputation.svg',
    content: 'Gestion durable des ressources naturelles et protection de l\'environnement',
    path: '#',
  },
];

// ----------------------------------------------------------------------

export default function CrepidLandingServices() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 640,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Nos Services
        </Typography>

        <Typography variant="h2">Secteurs d'Intervention</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Le CREPID intervient dans plusieurs domaines pour accompagner les populations, 
          organisations et institutions dans leur développement.
        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  service: {
    name: string;
    content: string;
    path: string;
    icon: string;
  };
  index: number;
};

function ServiceItem({ service, index }: ServiceItemProps) {
  const { name, icon, content, path } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => (theme.palette as any)[COLORS[index % COLORS.length]].main,
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant="h6" persistent>
          {name}
        </TextMaxLine>
        <TextMaxLine variant="body2" color="text.secondary" persistent>
          {content}
        </TextMaxLine>
      </Stack>

      <IconButton
        component={NextLink}
        href={path}
        color={COLORS[index % COLORS.length]}
        sx={{
          '&:hover': {
            bgcolor: (theme) => (theme.palette as any)[COLORS[index % COLORS.length]].lighter,
          },
        }}
      >
        <Iconify icon="carbon:chevron-right" />
      </IconButton>
    </Card>
  );
}
