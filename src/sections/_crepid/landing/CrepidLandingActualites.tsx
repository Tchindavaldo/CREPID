// next
import NextLink from 'next/link';
// @mui
import { Typography, Container, Stack, Button } from '@mui/material';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Iconify from 'src/components/iconify';
//
import { BlogTravelLatestPosts } from '../../blog/travel';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function CrepidLandingActualites({ posts }: Props) {
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
          Actualités
        </Typography>

        <Typography variant="h2">Dernières Nouvelles</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Restez informés de nos dernières réalisations, formations et projets en cours.
        </Typography>
      </Stack>

      <BlogTravelLatestPosts posts={posts} />

      <Stack alignItems="center" sx={{ mt: 8 }}>
        <Button
          component={NextLink}
          href="/blog"
          size="large"
          variant="outlined"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          Voir toutes les actualités
        </Button>
      </Stack>
    </Container>
  );
}
