// @mui
import { Divider, Container, Typography, Stack, Box, Avatar, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// _mock
import _mock from 'src/_mock';
import { _secteurs } from 'src/_mock/_secteurs';
import { _tags, _categories } from 'src/_mock';
// components
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Iconify from 'src/components/iconify';
//
import BlogSidebar from '../../blog/sidebar';
import { PostAuthor, PostSocialsShare } from '../../blog/components';
import { BlogTravelPostHero, BlogTravelLatestPosts } from '../../blog/travel';

// ----------------------------------------------------------------------

type Props = {
  serviceId: string;
};

export default function CrepidServiceDetailView({ serviceId }: Props) {
  // Find the secteur by ID
  const secteur = _secteurs.find((s) => s.id === serviceId) || _secteurs[0];

  const { title, description, author, category } = secteur;

  return (
    <>
      <BlogTravelPostHero post={secteur} />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Accueil', href: '/' },
            { name: 'Services', href: '/services' },
            { name: title },
          ]}
        />
      </Container>

      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              {description}
            </Typography>

            {/* Actions Section */}
            {secteur.actions && secteur.actions.length > 0 && (
              <Box sx={{ mb: 5 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  Actions Clés
                </Typography>
                <Stack spacing={2}>
                  {secteur.actions.map((action, index) => (
                    <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
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
                      <Typography variant="body1">{action}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Sous-sections */}
            {secteur.sousSections && secteur.sousSections.length > 0 && (
              <Box sx={{ mb: 5 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  Formations Disponibles
                </Typography>
                <Stack spacing={3}>
                  {secteur.sousSections.map((sousSection, index) => (
                    <Box key={index}>
                      <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                        {sousSection.titre}
                      </Typography>
                      {sousSection.contenu && (
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                          {sousSection.contenu}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Domaines */}
            {secteur.domaines && secteur.domaines.length > 0 && (
              <Box sx={{ mb: 5 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  Domaines d'Application
                </Typography>
                <Stack spacing={2}>
                  {secteur.domaines.map((domaine, index) => (
                    <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                      <Iconify icon="carbon:checkmark-filled" width={24} sx={{ color: 'success.main', mt: 0.5 }} />
                      <Typography variant="body1">{domaine}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Illustrations */}
            {secteur.illustrations && secteur.illustrations.length > 0 && (
              <Box sx={{ mb: 5 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  Illustrations
                </Typography>
                <Stack spacing={2}>
                  {secteur.illustrations.map((illustration, index) => (
                    <Typography key={index} variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                      • {illustration}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Single Illustration */}
            {secteur.illustration && (
              <Box sx={{ mb: 5 }}>
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', p: 3, bgcolor: 'background.neutral', borderRadius: 2 }}>
                  {secteur.illustration}
                </Typography>
              </Box>
            )}

            <Divider sx={{ my: 5 }} />

            <Box sx={{ mb: 5 }}>
              <Typography variant="overline" sx={{ color: 'text.disabled', display: 'block', mb: 2 }}>
                Catégorie
              </Typography>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>
                {category}
              </Typography>
            </Box>

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 5 }}>
              <Avatar 
                src="/assets/images/crepid/logo.icon.png" 
                sx={{ width: 64, height: 64 }} 
              />
              <Box>
                <Typography variant="h6">CREPID</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Centre de Recherche et d'Expertise pour le Développement Intégré et Durable
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <BlogSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _secteurs.slice(-4) }}
              advertisement={{
                title: 'Contactez-nous',
                description: 'Pour plus d\'informations sur ce service',
                imageUrl: _mock.image.travel(9),
                path: '/contact',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <BlogTravelLatestPosts posts={_secteurs.slice(0, 4)} />
    </>
  );
}
