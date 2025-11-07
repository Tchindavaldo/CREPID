// next
import NextLink from 'next/link';
import { useState, useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Typography,
  Container,
  Stack,
  Box,
  Card,
  Chip,
  Tabs,
  Tab,
  alpha,
  Button,
  Divider,
  Link,
} from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { fDate } from 'src/utils/formatTime';
// components
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { CarouselDots, CarouselArrows } from 'src/components/carousel';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const REFERENCES = [
  {
    domaine: 'Gestion des conflits entre agriculteurs et éleveurs',
    partenaire: 'PIDMA - Coopération Mondiale',
    realisation:
      "Mise en place d'une stratégie de gestion des conflits éleveurs-agriculteurs suivant l'approche des Cercles de Caution Solidaires",
    icon: 'carbon:partnership',
  },
  {
    domaine: 'Diagnostique et accompagnement des OP',
    partenaire: 'PACA - Coopération Mondiale',
    realisation:
      '163 sous-projets, dont 75 en filières productions animales (42 en production porcine et 33 en aviculture)',
    icon: 'carbon:document-tasks',
  },
  {
    domaine: 'Diagnostique et accompagnement des OP',
    partenaire: 'ASSAMBA - CEPAB',
    realisation:
      "28 sous-projets d'élevage dont 10 en production porcine, 10 en aviculture, 5 en apiculture et 3 en aquaculture intégrée",
    icon: 'carbon:document-tasks',
  },
  {
    domaine: 'Diagnostique et accompagnement des OP',
    partenaire: 'CREPID - Particuliers',
    realisation:
      'Élevage des porcs de race naïma ; Production et vulgarisation de 140 géniteurs porcins de race naïma dans la localité de Wang/Dja par Dschang',
    icon: 'carbon:document-tasks',
  },
  {
    domaine: 'Diagnostique et accompagnement des OP',
    partenaire: 'CREPID - Diocèse de Bafoussam',
    realisation:
      "Projet de complexe d'élevage de Foumbot comprenant les volets aviculture, apiculture et aquaculture intégrée à la production porcine",
    icon: 'carbon:document-tasks',
  },
  {
    domaine: 'Formation et accompagnement',
    partenaire: 'PACA - Coopération Mondiale',
    realisation:
      "40 Opérateurs d'Appui Locaux (OAL) formés dans la formulation des plans d'affaires, et accompagnés dans leur mise en œuvre",
    icon: 'carbon:education',
  },
  {
    domaine: 'Formation et accompagnement',
    partenaire: 'CREPID',
    realisation:
      "Gestion de 3 fermes d'application (01 en Apiculture, 01 en Aviculture et 01 en production porcine) : 390 producteurs formés",
    icon: 'carbon:education',
  },
  {
    domaine: 'Aménagement des pâturages',
    partenaire: 'CREPID - UAPI',
    realisation:
      "Diagnostique et proposition d'un plan d'aménagement pour 10 fermes d'élevage bovin",
    icon: 'carbon:farm',
  },
  {
    domaine: 'Aménagement des pâturages',
    partenaire: 'Diocèse de Bafoussam - CEPAB',
    realisation:
      "Contribution à l'aménagement et à la protection de 08 zones marginales de montagne pour son exploitation en pâturage",
    icon: 'carbon:farm',
  },
  {
    domaine: 'Aménagement des pâturages',
    partenaire: 'CREPID - Diocèse de Bafoussam',
    realisation:
      "Diagnostique et proposition d'un plan d'aménagement pour une ferme bovine à Galim",
    icon: 'carbon:farm',
  },
  {
    domaine: 'Structuration des OP',
    partenaire: 'PIDMA - Coopération Mondiale',
    realisation: '08 coopératives structurées et accompagnées',
    icon: 'carbon:collaborate',
  },
  {
    domaine: 'Partenariats productifs',
    partenaire: 'PIDMA - Coopération Mondiale',
    realisation: '03 agribusiness acheteurs de maïs identifiés et 17 contrats signés',
    icon: 'carbon:partnership',
  },
  {
    domaine: 'Partenariats productifs',
    partenaire: 'PACA - Coopération Mondiale',
    realisation:
      "70 contrats de partenariat OP-Entrepreneurs, OP-Fournisseurs d'intrants, OP-établissements de Microfinances (EMF) négociés et signés",
    icon: 'carbon:partnership',
  },
];

const EXEMPLES_REALISATIONS = [
  {
    domaine: 'Gestion durable des ressources naturelles',
    items: [
      "Conception et développement d'un projet de recherche sur la gestion durable des ressources naturelles, impact des pratiques piscicoles et agro-sylvicoles : cas de la Région des Grass Field au Cameroun",
      "Mise sur pied d'un programme de protection de certaines ressources naturelles en danger d'extinction (Bambou de raphia)",
      "Mise sur pied d'un programme de régénération des bambous de Chine pour la protection des points d'eau potable consommée par les populations riveraines dans les Villages Bassossia et Banock",
      "Création et gestion d'un atelier de valorisation des Bambou de Chine et des produits forestiers non ligneux en artisanat",
    ],
  },
  {
    domaine: "Protection de l'environnement",
    items: [
      'Formation de 19 organisations de producteurs dans le bassin du lac Tchad en gestion des emballages des pesticides (coopération Cameroun - Banque mondiale - projet PACA)',
    ],
  },
  {
    domaine: 'Formation et accompagnement AGR',
    items: [
      "Verger d'avocatier",
      'Bananeraie plantain',
      "Ferme d'élevage de poules pondeuses et poulets de chair",
      'Ferme porcine de race Naïma',
    ],
  },
  {
    domaine: "Développement de la pêche et de l'aquaculture",
    items: [
      'Formation et accompagnement des pêcheurs pour la promotion et le renforcement de la pêche dans le fleuve Nyong',
    ],
  },
  {
    domaine: 'Genre et Développement',
    items: [
      "Supervision pendant trois ans des Actions Agricoles Féminines pour le compte des Services du Développement Communautaire de l'Ouest",
    ],
  },
  {
    domaine: 'Autres projets de développement',
    items: [
      "Réalisation des études de faisabilité, montage, suivi et évaluation d'un projet de Complexe agropastoral pour le compte du Diocèse de Bafoussam",
      'Organisation des diagnostics participatifs dans les Moyennes et Grandes Exploitations (Cacaoyer, caféier, Palmier à huile, Maïs, Pomme de terre)',
      'Participation au diagnostic participatif dans un ranch de sa Majesté le Chef Supérieur des Bagham',
      "Contribution à la déclinaison du Document de Stratégie de Développement du Secteur Rural (DSDSR) et du Document de Stratégie de Réduction de la Pauvreté dans le Secteur Rural (DSRPSR) pour la région de l'Ouest",
      "Mise sur pied de quatre fermes d'application (un verger d'avocatier, une bananeraie plantain, une ferme d'élevage porcin, une ferme de production du maïs)",
    ],
  },
];

// ----------------------------------------------------------------------

export default function CrepidLandingReferences() {
  const theme = useTheme();
  const isMdUp = useResponsive('up', 'md');
  const carouselRef = useRef<Carousel | null>(null);

  const [currentTab, setCurrentTab] = useState('references');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      width: 1,
      bottom: 80,
      position: 'absolute',
    }),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box
      sx={{
        bgcolor: 'common.white',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 640,
            mb: { xs: 6, md: 8 },
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Nos Références
          </Typography>

          <Typography variant="h2">Nos Récentes Références</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Le CREPID a collaboré avec de nombreux partenaires nationaux et internationaux pour la
            réalisation de projets de développement durable.
          </Typography>
        </Stack>

        {/* Tabs Navigation */}
        <Box sx={{ mb: 5 }}>
          <Tabs
            value={currentTab}
            onChange={handleChangeTab}
            variant={isMdUp ? 'standard' : 'fullWidth'}
            sx={{
              px: { xs: 0, md: 2 },
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: (theme) => theme.customShadows.z8,
              '& .MuiTabs-flexContainer': {
                flexWrap: { xs: 'wrap', md: 'nowrap' },
              },
              '& .MuiTab-root': {
                minWidth: 0,
              },
            }}
          >
            <Tab
              value="references"
              label="Références par Partenaire"
              icon={<Iconify icon="carbon:partnership" width={20} />}
              iconPosition="start"
            />
            <Tab
              value="exemples"
              label="Exemples de Réalisations"
              icon={<Iconify icon="carbon:task-complete" width={20} />}
              iconPosition="start"
            />
          </Tabs>
        </Box>

        {/* Références par partenaire - Benefits Achieved Style */}
        {currentTab === 'references' && (
          <Box>
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 3 }}>
              Nos Partenaires et Références
            </Typography>

            <Typography
              sx={{
                mx: 'auto',
                opacity: 0.72,
                maxWidth: 480,
                textAlign: 'center',
                mb: { xs: 8, md: 10 },
              }}
            >
              Découvrez nos collaborations avec des partenaires de renom pour un développement
              durable et intégré.
            </Typography>

            <Box
              sx={{
                display: 'grid',
                alignItems: 'center',
                gap: { xs: 4, md: 8 },
                gridTemplateColumns: { md: 'repeat(3, 1fr)' },
              }}
            >
              <Stack spacing={{ xs: 4, md: 10 }}>
                {REFERENCES.slice(0, 3).map((ref, index) => (
                  <ReferenceItem key={index} reference={ref} index={index} reverse />
                ))}
              </Stack>

              {isMdUp && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 280,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                      position: 'relative',
                    }}
                  >
                    <Iconify
                      icon="carbon:partnership"
                      sx={{
                        width: 120,
                        height: 120,
                        color: 'primary.main',
                        opacity: 0.48,
                      }}
                    />
                  </Box>
                </Box>
              )}

              <Stack spacing={{ xs: 4, md: 10 }}>
                {REFERENCES.slice(3, 6).map((ref, index) => (
                  <ReferenceItem key={index} reference={ref} index={index} />
                ))}
              </Stack>
            </Box>
          </Box>
        )}

        {/* Exemples de réalisations - Exact Latest Posts Style */}
        {currentTab === 'exemples' && (
          <Box sx={{ bgcolor: 'grey.900', mx: -3, borderRadius: 2 }}>
            {!isMdUp && (
              <Typography
                variant="h2"
                sx={{ pt: 10, pb: 8, color: 'common.white', textAlign: 'center' }}
              >
                Exemples de Réalisations
              </Typography>
            )}

            <Box
              gap={{ xs: 8, md: 0 }}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
              {/* Carousel Section */}
              <Box sx={{ overflow: 'hidden', position: 'relative' }}>
                <CarouselArrows
                  onNext={handleNext}
                  onPrev={handlePrev}
                  leftButtonProps={{ sx: { color: 'common.white' } }}
                  rightButtonProps={{ sx: { color: 'common.white' } }}
                >
                  <Carousel ref={carouselRef} {...carouselSettings}>
                    {EXEMPLES_REALISATIONS.slice(0, 3).map((exemple) => (
                      <CarouselItem key={exemple.domaine} exemple={exemple} />
                    ))}
                  </Carousel>
                </CarouselArrows>
              </Box>

              {/* List Section */}
              <Box
                sx={{
                  px: { xs: 2.5, sm: 5, md: 8, lg: 15 },
                }}
              >
                {isMdUp && (
                  <Typography variant="h2" sx={{ color: 'common.white', py: 10 }}>
                    Exemples de Réalisations
                  </Typography>
                )}

                <Stack spacing={3}>
                  {EXEMPLES_REALISATIONS.slice(0, 3).map((exemple) => (
                    <ListItem key={exemple.domaine} exemple={exemple} />
                  ))}
                </Stack>

                <Box
                  sx={{
                    mt: { xs: 8, md: 5 },
                    mb: 10,
                    textAlign: { xs: 'center', md: 'right' },
                  }}
                >
                  <Button
                    component={NextLink}
                    href="/realisations"
                    endIcon={<Iconify icon="carbon:chevron-right" />}
                  >
                    Voir Tout
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ReferenceItemProps = {
  index: number;
  reverse?: boolean;
  reference: {
    domaine: string;
    partenaire: string;
    realisation: string;
    icon: string;
  };
};

function ReferenceItem({ reference, reverse, index }: ReferenceItemProps) {
  const { domaine, partenaire, realisation } = reference;

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      sx={{
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        ...(index === 1 && {
          pl: { md: 6 },
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      <Box
        sx={{
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h6">{domaine}</Typography>
        <Chip
          label={partenaire}
          size="small"
          color="primary"
          variant="outlined"
          sx={{ width: 'fit-content' }}
        />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {realisation}
        </Typography>
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  exemple: {
    domaine: string;
    items: string[];
  };
};

function CarouselItem({ exemple }: CarouselItemProps) {
  // Mapper chaque domaine avec une image CREPID appropriée
  const imageMapping: { [key: string]: string } = {
    'Gestion durable des ressources naturelles': '/assets/images/crepid/Domaines d\'Intervention/Gestion durable des ressources naturelles/image.png',
    'Protection de l\'environnement': '/assets/images/crepid/vision ambition/Protection environnementale.png',
    'Formation et accompagnement AGR': '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_1.png',
    'Développement de la pêche et de l\'aquaculture': '/assets/images/crepid/Domaines d\'Intervention/Pêche et aquaculture/image.png',
    'Genre et Développement': '/assets/images/crepid/vision ambition/Bien-être social.png',
    'Autres projets de développement': '/assets/images/crepid/Domaines d\'Intervention/Développement organisationnel/image1.png',
  };
  
  const backgroundImage = imageMapping[exemple.domaine] || '/assets/images/crepid/hero/image.png';

  return (
    <Stack sx={{ position: 'relative' }}>
      <Stack
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          textAlign: 'center',
          position: 'absolute',
          color: 'common.white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ mx: 'auto', maxWidth: 400, px: 3 }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            Domaine d'Intervention
          </Typography>

          <Typography variant="h3" sx={{ mt: 1, mb: 5 }}>
            {exemple.domaine}
          </Typography>

          <Typography sx={{ opacity: 0.72, mb: 10 }}>{exemple.items[0]}</Typography>

          <Button
            component={NextLink}
            href="/realisations"
            variant="contained"
            color="primary"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            En savoir plus
          </Button>
        </Box>
      </Stack>

      <Box
        sx={{
          top: 0,
          left: 0,
          zIndex: 8,
          width: '100%',
          height: '100%',
          position: 'absolute',
          bgcolor: (theme) => alpha(theme.palette.common.black, 0.64),
        }}
      />

      <Image
        src={backgroundImage}
        alt={exemple.domaine}
        sx={{
          width: 1,
          height: { xs: 720, md: 960 },
        }}
      />
    </Stack>
  );
}

// ----------------------------------------------------------------------

type ListItemProps = {
  exemple: {
    domaine: string;
    items: string[];
  };
};

function ListItem({ exemple }: ListItemProps) {
  return (
    <div>
      <Typography variant="caption" sx={{ color: 'primary.main' }}>
        Domaine d'Intervention
      </Typography>

      <Link component={NextLink} href="/realisations" sx={{ color: 'common.white' }}>
        <TextMaxLine variant="h5" sx={{ mt: 1, mb: 2 }}>
          {exemple.domaine}
        </TextMaxLine>
      </Link>

      <TextMaxLine variant="body2" line={2} sx={{ color: 'text.secondary' }}>
        {exemple.items.slice(0, 2).join(' • ')}
      </TextMaxLine>

      <Divider sx={{ borderStyle: 'dashed', mt: 3 }} />
    </div>
  );
}
