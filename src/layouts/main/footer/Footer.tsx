// next
import { useRouter } from 'next/router';
// @mui
import { alpha, styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import {
  Link,
  Stack,
  Button,
  Divider,
  Container,
  TextField,
  Typography,
  IconButton,
  StackProps,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// _mock
import { _socials } from 'src/_mock';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
//
import { pageLinks, navConfig } from '../nav/config-navigation';
import ListDesktop from './ListDesktop';
import ListMobile from './ListMobile';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  margin: theme.spacing(1),
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  '& .MuiButton-startIcon': {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const isMdUp = useResponsive('up', 'md');

  const { pathname } = useRouter();

  const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderLists = isMdUp ? desktopList : mobileList;

  const isHome = pathname === '/';

  const simpleFooter = (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Logo single />

      <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
        © {new Date().getFullYear()} CREPID. Tous droits réservés
      </Typography>
    </Container>
  );

  const mainFooter = (
    <>
      <Divider />

      <Container
        sx={{
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          {/* Colonne 1 - Logo et Description */}
          <Grid xs={12} md={3}>
            <Stack spacing={2}>
              <Logo />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Centre de Recherche et d'Expertise pour le Développement Intégré et Durable.
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton size="small" color="primary" href="https://facebook.com/crepid" target="_blank">
                  <Iconify icon="carbon:logo-facebook" />
                </IconButton>
                <IconButton size="small" color="primary" href="https://linkedin.com/company/crepid" target="_blank">
                  <Iconify icon="carbon:logo-linkedin" />
                </IconButton>
                <IconButton size="small" color="primary" href="https://youtube.com/@crepid" target="_blank">
                  <Iconify icon="carbon:logo-youtube" />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Colonne 2 - Coordonnées et Contact */}
          <Grid xs={12} sm={6} md={2.5}>
            <Stack spacing={2}>
              <Typography variant="h6">Contact</Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Bansoa, Ouest Cameroun
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Département de la Menoua
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  contact@crepid.org
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +237 XXX XXX XXX
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Colonne 3 - Liens rapides */}
          <Grid xs={12} sm={6} md={2}>
            <Stack spacing={2}>
              <Typography variant="h6">Liens rapides</Typography>
              <Stack spacing={0.5}>
                <Link href="/about" variant="body2" sx={{ color: 'text.secondary' }}>
                  À propos
                </Link>
                <Link href="/services" variant="body2" sx={{ color: 'text.secondary' }}>
                  Nos services
                </Link>
                <Link href="/formations" variant="body2" sx={{ color: 'text.secondary' }}>
                  Formations
                </Link>
                <Link href="/contact" variant="body2" sx={{ color: 'text.secondary' }}>
                  Contact
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Colonne 4 - Newsletter */}
          <Grid xs={12} md={4.5}>
            <Stack spacing={2}>
              <Typography variant="h6">Restez informé</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Inscrivez-vous à notre newsletter
              </Typography>
              <TextField
                fullWidth
                size="small"
                hiddenLabel
                placeholder="Adresse email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained" color="primary" size="small">
                        S'inscrire
                      </Button>
                    </InputAdornment>
                  ),
                  sx: { pr: 0.5 },
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} CREPID. Tous droits réservés
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Politique de confidentialité
            </Link>

            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Conditions d'utilisation
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );

  return <footer>{mainFooter}</footer>;
}

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }: StackProps) {
  return (
    <Stack direction="row" flexWrap="wrap" {...other}>
      <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>
          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}
