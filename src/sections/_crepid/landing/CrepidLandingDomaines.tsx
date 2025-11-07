// next
import NextLink from 'next/link';
import { useState } from 'react';
// @mui
import { 
  Stack, 
  Container, 
  Typography, 
  Card, 
  Box, 
  Button, 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  alpha,
} from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const DOMAINES = [
  {
    title: 'Accompagnement au montage et à la mise en œuvre des projets',
    description: 'Accompagnement participatif des communautés, organisations, entreprises et individus dans l\'identification des problèmes et la mise sur pied des stratégies appropriées de solution',
    items: [
      'Diagnostics participatifs et élaboration des stratégies de développement',
      'La recherche-action',
      'Élaboration des projets de développement',
      'Réalisation des études pour une prise de décision éclairée',
    ],
    icon: '/assets/icons/service/ic_service_seo.svg',
    image: '/assets/images/travel/travel_post_01.jpg',
  },
  {
    title: 'Formations pratiques agricoles, d\'élevage et d\'artisanat',
    description: 'Formation essentiellement pratique avec affectation immédiate auprès des exploitations. Suivi/encadrement pendant au moins un cycle de production',
    items: [
      'Verger d\'avocatier (80 000 FCFA/plant dès l\'année de croisière)',
      'Maïs de contre-saison et semences',
      'Élevage porcin (races Landrace et Large White)',
      'Exploitations avicoles (pondeuses et poulets de chair)',
      'Apiculture (rucher, récolte et traitement du miel)',
      'Bananier plantain',
      'Transformation et conservation des fruits',
    ],
    icon: '/assets/icons/service/ic_service_analysis.svg',
    image: '/assets/images/travel/travel_post_02.jpg',
  },
  {
    title: 'Suivi et évaluation des projets de développement',
    description: 'Planification stratégique et opérationnelle, suivi des projets et populations bénéficiaires. Accompagnement dans la mise en place des unités de suivi interne',
    items: [
      'Suivi en cours d\'action',
      'Évaluation en fin de projet',
      'Développement de réflexions et analyses',
      'Prise de décisions basées sur les données',
    ],
    icon: '/assets/icons/service/ic_service_bullhorn.svg',
    image: '/assets/images/travel/travel_post_03.jpg',
  },
  {
    title: 'Études et recherches pour technologies innovantes',
    description: 'Conception de nouveaux modèles technologiques mis à la disposition des populations cibles',
    items: [
      'Gestion des ressources naturelles : régénération des raphiales',
      'Bâtiment : promotion de la brique de terre stabilisée',
      'Transformation : valorisation du bambou de Chine en ameublement',
      'Produits forestiers non ligneux',
    ],
    icon: '/assets/icons/service/ic_service_mail.svg',
    image: '/assets/images/travel/travel_post_04.jpg',
  },
  {
    title: 'Animation des réflexions et des formations',
    description: 'Organisation de formations et rencontres d\'échanges entre acteurs de développement. Production de supports audiovisuels pour la formation',
    items: [
      'Planification stratégique et opérationnelle',
      'Amélioration des processus de production et vente',
      'Responsabilisation du personnel',
      'Ateliers de renforcement des capacités techniques',
      'Production de supports audiovisuels (documentations, affiches, boîtes à images)',
    ],
    icon: '/assets/icons/ic_popularity.svg',
    image: '/assets/images/travel/travel_post_05.jpg',
  },
  {
    title: 'Développement organisationnel',
    description: 'Utilisation rationnelle des ressources internes et externes pour faciliter le progrès de l\'organisation et des personnes',
    items: [
      'Processus planifié avec objectifs spécifiés',
      'Moments de réflexion et recherche',
      'Concertation pour le progrès',
      'Diagnostic participatif des organisations paysannes',
    ],
    icon: '/assets/icons/ic_reputation.svg',
    image: '/assets/images/travel/travel_post_06.jpg',
  },
  {
    title: 'Autopromotion des populations démunies urbaines',
    description: 'Appui à l\'autopromotion des populations urbaines démunies par l\'agriculture et l\'élevage urbain et périurbain',
    items: [
      'Organisation en réseau d\'acteurs par filière',
      'Identification participative des problèmes',
      'Développement de l\'artisanat et petites activités',
      'Passage du stade informel vers l\'entreprise',
      'Accompagnement des jeunes en déperdition scolaire',
    ],
    icon: '/assets/icons/ic_secure_payment.svg',
    image: '/assets/images/travel/travel_post_07.jpg',
  },
  {
    title: 'Organisation et professionnalisation des producteurs',
    description: 'Développement de stratégies pour susciter l\'esprit de groupe et favoriser la professionnalisation dans les filières de production',
    items: [
      'Appui à la création des organisations de producteurs',
      'Restructuration des organisations existantes',
      'Mise sur pied des coopératives et entreprises',
      'Diagnostics participatifs et formations',
      'Élaboration et suivi des plans d\'action',
    ],
    icon: '/assets/icons/service/ic_service_seo.svg',
    image: '/assets/images/travel/travel_post_08.jpg',
  },
  {
    title: 'Conception d\'outils de communication',
    description: 'Réalisation de messages, supports et outils divers pour transmettre des idées et faire connaître des produits',
    items: [
      'Messages adaptés aux types de publics',
      'Supports de communication innovants',
      'Outils de transmission d\'idées et concepts',
    ],
    icon: '/assets/icons/service/ic_service_analysis.svg',
    image: '/assets/images/travel/travel_post_01.jpg',
  },
  {
    title: 'Épargne, microcrédits et financement',
    description: 'Développement de stratégies et mécanismes de mobilisation des fonds pour le financement des activités des populations',
    items: [
      'Mise sur pied de sources informelles (Tontine, Djangui)',
      'Renforcement des capacités de gestion',
      'Répertoire des sources de subventions',
      'Accompagnement dans les démarches de demande',
      'Diagnostics participatifs des structures de financement',
    ],
    icon: '/assets/icons/ic_secure_payment.svg',
    image: '/assets/images/travel/travel_post_02.jpg',
  },
  {
    title: 'Genre et Développement',
    description: 'Réflexions sur l\'approche genre et stratégies pour impliquer davantage la femme dans la vie économique, sociale et culturelle',
    items: [
      'Autonomisation des femmes',
      'Actions agricoles féminines',
      'Inclusion économique et sociale',
      'Supervision des programmes féminins',
    ],
    icon: '/assets/icons/ic_reputation.svg',
    image: '/assets/images/travel/travel_post_03.jpg',
  },
  {
    title: 'Développement de la pêche et de l\'aquaculture',
    description: 'Accompagnement des populations rurales dans la compréhension de l\'importance de l\'aquaculture et de la pêche',
    items: [
      'Animation et sensibilisation des populations',
      'Sélection des espèces appropriées',
      'Choix des sites de pêche et d\'élevage',
      'Construction des étangs et production d\'alevins',
      'Techniques de récolte et conservation',
      'Gestion de la productivité naturelle',
    ],
    icon: '/assets/icons/service/ic_service_mail.svg',
    image: '/assets/images/travel/travel_post_04.jpg',
  },
  {
    title: 'Gestion durable des ressources naturelles',
    description: 'Recherche et identification des stratégies de gestion durables des ressources naturelles face à la démographie galopante',
    items: [
      'Aménagement des écosystèmes fragiles (bas-fonds, terrains marécageux)',
      'Régénération des ressources en danger (Raphiales, Bambous de Chine)',
      'Conservation des essences de plantes et races d\'animaux',
      'Appui à l\'agroforesterie',
      'Développement de la foresterie communautaire',
      'Valorisation du bambou en artisanat',
      'Captage et aménagement de sources d\'eau',
    ],
    icon: '/assets/icons/ic_popularity.svg',
    image: '/assets/images/travel/travel_post_05.jpg',
  },
];

// ----------------------------------------------------------------------

export default function CrepidLandingDomaines() {
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
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Nos Secteurs d'Action
        </Typography>

        <Typography variant="h2">Nos Domaines d'Intervention</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Le CREPID intervient dans 7 domaines clés pour accompagner le développement 
          durable des communautés rurales et urbaines.
        </Typography>
      </Stack>

      <Stack spacing={2}>
        {DOMAINES.map((domaine, index) => (
          <Accordion
            key={domaine.title}
            sx={{
              bgcolor: 'background.paper',
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                boxShadow: (theme) => theme.customShadows.z8,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<Iconify icon="carbon:chevron-down" />}
              sx={{
                px: 3,
                py: 2,
                '&:hover': {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.04),
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" sx={{ width: 1 }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    flexShrink: 0,
                    display: 'flex',
                    borderRadius: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                    color: 'primary.main',
                  }}
                >
                  <SvgColor
                    src={domaine.icon}
                    sx={{
                      width: 28,
                      height: 28,
                      color: 'primary.main',
                    }}
                  />
                </Box>

                <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{domaine.title}</Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {domaine.description}
                  </Typography>
                </Stack>
              </Stack>
            </AccordionSummary>

            <AccordionDetails sx={{ px: 3, pb: 3 }}>
              <Stack spacing={2}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {domaine.description}
                </Typography>

                <Box
                  sx={{
                    display: 'grid',
                    gap: 1.5,
                    gridTemplateColumns: {
                      xs: 'repeat(1, 1fr)',
                      sm: 'repeat(2, 1fr)',
                    },
                  }}
                >
                  {domaine.items.map((item) => (
                    <Stack 
                      key={item} 
                      direction="row" 
                      spacing={1} 
                      alignItems="flex-start"
                      sx={{
                        p: 1.5,
                        borderRadius: 1,
                        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
                      }}
                    >
                      <Iconify
                        icon="carbon:checkmark-filled"
                        sx={{ color: 'success.main', width: 18, height: 18, mt: 0.2, flexShrink: 0 }}
                      />
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>

      <Stack alignItems="center" sx={{ mt: 8 }}>
        <Button
          component={NextLink}
          href="/services"
          size="large"
          variant="outlined"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          Voir tous nos services
        </Button>
      </Stack>
    </Container>
  );
}
