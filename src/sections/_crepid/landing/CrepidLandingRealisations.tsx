// next
import { useState } from 'react';
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  Container,
  Typography,
  Paper,
  Avatar,
  Tooltip,
  Link,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import CountUp from 'src/components/count-up';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const STATS = [
  {
    total: 390,
    description: 'Producteurs formés',
    icon: 'carbon:user-multiple',
  },
  {
    total: 163,
    description: 'Sous-projets accompagnés',
    icon: 'carbon:document-tasks',
  },
  {
    total: 4,
    description: 'Fermes pilotes d\'application',
    icon: 'carbon:agriculture-analytics',
  },
  {
    total: 19,
    description: 'Organisations formées',
    icon: 'carbon:partnership',
  },
];

const REALISATIONS = [
  {
    title: 'Gestion des conflits agriculteurs/éleveurs',
    description: 'Mise en place d\'une stratégie de gestion des conflits éleveurs-agriculteurs suivant l\'approche des Cercles de Caution Solidaires',
    partner: 'PIDMA - Coopération Mondiale',
    image: '/assets/images/crepid/logo.icon.png',
  },
  {
    title: 'Diagnostique et accompagnement des OP',
    description: '163 sous-projets dont 75 en filières productions animales (42 en production porcine et 33 en aviculture)',
    partner: 'PACA - Coopération Mondiale',
    image: '/assets/images/crepid/logo.icon.png',
  },
  {
    title: 'Projet complexe d\'élevage Foumbot',
    description: 'Complexe d\'élevage comprenant les volets aviculture, apiculture et aquaculture intégrée à la production porcine',
    partner: 'CREPID - Diocèse de Bafoussam',
    image: '/assets/images/crepid/logo.icon.png',
  },
  {
    title: 'Formation des Opérateurs d\'Appui Locaux',
    description: '40 OAL formés dans la formulation des plans d\'affaires et accompagnés dans leur mise en œuvre',
    partner: 'PACA - Coopération Mondiale',
    image: '/assets/images/crepid/logo.icon.png',
  },
  {
    title: 'Structuration des coopératives',
    description: '08 coopératives structurées et accompagnées dans la mise en œuvre de leur plan d\'affaire',
    partner: 'PIDMA - Coopération Mondiale',
    image: '/assets/images/crepid/logo.icon.png',
  },
  {
    title: 'Développement des partenariats productifs',
    description: '70 contrats de partenariat OP-Entrepreneurs, OP-Fournisseurs d\'intrants, OP-EMF négociés et signés',
    partner: 'PACA - Coopération Mondiale',
    image: '/assets/images/crepid/logo.icon.png',
  },
  {
    title: 'Aménagement des pâturages',
    description: 'Contribution à l\'aménagement et protection de 08 zones marginales de montagne pour exploitation en pâturage',
    partner: 'Diocèse de Bafoussam - CEPAB',
    image: '/assets/images/crepid/logo.icon.png',
  },
  {
    title: 'Protection de l\'environnement',
    description: 'Formation de 19 organisations de producteurs dans le bassin du lac Tchad en gestion des emballages de pesticides',
    partner: 'Coopération Cameroun - Banque Mondiale - PACA',
    image: '/assets/images/crepid/logo.icon.png',
  },
];

// ----------------------------------------------------------------------

export default function CrepidLandingRealisations() {
  const theme = useTheme();
  const isMdUp = useResponsive('up', 'md');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleToggleExpand = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  const viewAllBtn = (
    <Button
      component={NextLink}
      href="/realisations"
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      Voir tout
    </Button>
  );

  return (
    <Box
      sx={{
        bgcolor: 'common.white',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h2">Nos Réalisations</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Nos réalisations concrètes démontrent notre engagement envers un développement durable et intégré !
            </Typography>
          </Stack>

          {isMdUp && viewAllBtn}
        </Stack>

        {/* Chiffres clés */}
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            mb: { xs: 8, md: 10 },
          }}
        >
          {STATS.map((stat) => (
            <Paper
              key={stat.description}
              variant="outlined"
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 2,
                transition: 'all 0.3s',
                '&:hover': {
                  boxShadow: (theme) => theme.customShadows.z16,
                  borderColor: 'primary.main',
                },
              }}
            >
              <Stack spacing={1} alignItems="center">
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    display: 'flex',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                    color: 'primary.main',
                  }}
                >
                  <Iconify icon={stat.icon} width={32} />
                </Box>

                <Typography variant="h3">
                  <CountUp
                    start={stat.total / 5}
                    end={stat.total}
                    formattingFn={(newValue: number) => fShortenNumber(newValue)}
                  />
                  +
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {stat.description}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Box>

        {/* Exemples concrets - Exact Tours By City Style */}
        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
          {REALISATIONS.map((realisation) => {
            const isExpanded = expandedItem === realisation.title;
            
            // Mobile: Expandable cards
            if (!isMdUp) {
              return (
                <Paper
                  key={realisation.title}
                  variant="outlined"
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    cursor: 'pointer',
                    bgcolor: 'background.default',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: (theme) => theme.customShadows.z24,
                      bgcolor: 'background.paper',
                    },
                  }}
                  onClick={() => handleToggleExpand(realisation.title)}
                >
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" spacing={2.5}>
                      <Avatar src={realisation.image} sx={{ width: 64, height: 64, flexShrink: 0 }} />

                      <Stack spacing={0.5} sx={{ minWidth: 0, flex: 1 }}>
                        <Typography variant="h6" sx={{ 
                          display: '-webkit-box',
                          WebkitLineClamp: isExpanded ? 'unset' : 1,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}>
                          {realisation.title}
                        </Typography>

                        <Typography variant="body2" sx={{ 
                          color: 'text.secondary',
                          display: '-webkit-box',
                          WebkitLineClamp: isExpanded ? 'unset' : 1,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}>
                          {realisation.partner}
                        </Typography>
                      </Stack>

                      <Iconify 
                        icon={isExpanded ? 'carbon:chevron-up' : 'carbon:chevron-down'} 
                        sx={{ 
                          width: 24, 
                          height: 24, 
                          color: 'primary.main',
                          flexShrink: 0,
                        }} 
                      />
                    </Stack>

                    {isExpanded && (
                      <Box
                        sx={{
                          pt: 2,
                          borderTop: (theme) => `dashed 1px ${theme.palette.divider}`,
                        }}
                      >
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {realisation.description}
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                </Paper>
              );
            }

            // Desktop: Tooltip + Link to /realisations
            return (
              <Tooltip
                key={realisation.title}
                title={
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      {realisation.title}
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                      {realisation.partner}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      {realisation.description}
                    </Typography>
                  </Box>
                }
                arrow
                placement="top"
              >
                <Link
                  component={NextLink}
                  href="/realisations"
                  color="inherit"
                  underline="none"
                >
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 3,
                      height: 112,
                      borderRadius: 2,
                      cursor: 'pointer',
                      bgcolor: 'background.default',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        boxShadow: (theme) => theme.customShadows.z24,
                        bgcolor: 'background.paper',
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2.5} sx={{ width: 1 }}>
                      <Avatar src={realisation.image} sx={{ width: 64, height: 64, flexShrink: 0 }} />

                      <Stack spacing={0.5} sx={{ minWidth: 0, flex: 1 }}>
                        <TextMaxLine variant="h6" line={1}>
                          {realisation.title}
                        </TextMaxLine>

                        <TextMaxLine variant="body2" line={1} sx={{ color: 'text.secondary' }}>
                          {realisation.partner}
                        </TextMaxLine>
                      </Stack>
                    </Stack>
                  </Paper>
                </Link>
              </Tooltip>
            );
          })}
        </Box>

        {!isMdUp && (
          <Stack alignItems="center" sx={{ mt: 8 }}>
            {viewAllBtn}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
