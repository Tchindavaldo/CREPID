// @mui
import { Box, Container, Typography, Stack, TextField, Button, Grid, Card, alpha, Unstable_Grid2 as Grid2 } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const HERO_IMAGES = [
  '/assets/images/crepid/Domaines d\'Intervention/Développement organisationnel/image2.png',
  '/assets/images/crepid/Domaines d\'Intervention/Animation et formations/image.png',
  '/assets/images/crepid/Domaines d\'Intervention/Formations pratiques agricoles/formation_agricole_2.png',
  '/assets/images/crepid/Domaines d\'Intervention/Professionnalisation producteurs/image.png',
];

const CONTACT_INFO = [
  {
    title: 'Adresse',
    description: 'Bansoa, Département de la Menoua, Ouest Cameroun (288 Km de Yaoundé)',
    icon: 'carbon:location',
    color: 'primary',
  },
  {
    title: 'Email',
    description: 'contact@crepid.org',
    icon: 'carbon:email',
    color: 'info',
  },
  {
    title: 'Téléphone',
    description: '+237 XXX XXX XXX',
    icon: 'carbon:phone',
    color: 'success',
  },
  {
    title: 'Horaires',
    description: 'Lundi - Vendredi : 8h00 - 17h00 | Samedi : 8h00 - 12h00',
    icon: 'carbon:time',
    color: 'warning',
  },
];

// ----------------------------------------------------------------------

export default function CrepidContactView() {
  const isSmUp = useResponsive('up', 'sm');

  return (
    <>
      {/* Hero Section with Images */}
      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 15, md: 20 },
          pb: 5,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 560,
            textAlign: 'center',
            pb: { xs: 5, md: 10 },
          }}
        >
          <Typography variant="h1">Contactez-nous</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Nous sommes à votre écoute pour toute question ou collaboration.
            N'hésitez pas à nous contacter pour plus d'informations sur nos services,
            formations ou opportunités de partenariat.
          </Typography>
        </Stack>

        {/* Hero Images Grid */}
        <Grid2 container spacing={3} sx={{ mb: 5 }}>
          {(isSmUp ? HERO_IMAGES : HERO_IMAGES.slice(0, 1)).map((img, index) => (
            <Grid2 key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
              <Image alt={`contact-${index}`} src={img} sx={{ height: 350, borderRadius: 2 }} />
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* Contact Info Cards */}
      <Container sx={{ py: { xs: 10, md: 15 } }}>
        <Grid container spacing={3} sx={{ mb: 10 }}>
          {CONTACT_INFO.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow: (theme) => theme.customShadows.z16,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    mx: 'auto',
                    mb: 2,
                    display: 'flex',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => alpha((theme.palette as any)[info.color].main, 0.08),
                    color: `${info.color}.main`,
                  }}
                >
                  <Iconify icon={info.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {info.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {info.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h3">Envoyez-nous un message</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </Typography>

              <TextField fullWidth label="Nom complet" />
              <TextField fullWidth label="Email" type="email" />
              <TextField fullWidth label="Téléphone" />
              <TextField fullWidth label="Sujet" />
              <TextField fullWidth label="Message" multiline rows={4} />

              <Button variant="contained" size="large" color="primary">
                Envoyer le message
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h3">Pourquoi nous contacter ?</Typography>

              <Stack spacing={2}>
                {[
                  'Informations sur nos formations',
                  'Opportunités de partenariat',
                  'Accompagnement de projets',
                  'Visites de nos fermes d\'application',
                  'Consultations techniques',
                  'Collaboration institutionnelle',
                ].map((reason, index) => (
                  <Stack key={index} direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body1">{reason}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: 2,
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Suivez-nous sur les réseaux sociaux
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Box
                    component="a"
                    href="https://facebook.com/crepid"
                    target="_blank"
                    sx={{
                      width: 40,
                      height: 40,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'common.white',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <Iconify icon="carbon:logo-facebook" width={20} />
                  </Box>
                  <Box
                    component="a"
                    href="https://linkedin.com/company/crepid"
                    target="_blank"
                    sx={{
                      width: 40,
                      height: 40,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'common.white',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <Iconify icon="carbon:logo-linkedin" width={20} />
                  </Box>
                  <Box
                    component="a"
                    href="https://youtube.com/@crepid"
                    target="_blank"
                    sx={{
                      width: 40,
                      height: 40,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'common.white',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <Iconify icon="carbon:logo-youtube" width={20} />
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
