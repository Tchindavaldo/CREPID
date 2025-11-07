// next
import NextLink from 'next/link';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Card, Stack, Avatar, Link, Typography } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
import { bgGradient } from 'src/utils/cssStyles';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
  largePost?: boolean;
};

export default function PostItemFeatured({ post, largePost }: Props) {
  const theme = useTheme();

  const { id, title, coverImg, description, createdAt } = post;

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <Image
          alt={title}
          src={coverImg}
          overlay={alpha(theme.palette.grey[900], 0.48)}
          sx={{
            height: { xs: 280, md: largePost ? 560 : 280 },
          }}
        />

        <Stack
          spacing={0.5}
          sx={{
            p: 2,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
            width: '100%',
            height: largePost ? 'auto' : 140,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            ...bgGradient({
              direction: 'to top',
              startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
              endColor: `${theme.palette.grey[900]} 75%`,
            }),
          }}
        >
          <Stack direction="row" alignItems="center" sx={{ opacity: 0.72 }}>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              Intervention
            </Typography>
          </Stack>

          <Link component={NextLink} href={`/service/${id}`} color="inherit">
            <TextMaxLine 
              line={largePost ? 3 : 2} 
              variant={largePost ? 'h3' : 'subtitle2'} 
              sx={{ mb: 0.5 }}
            >
              {title}
            </TextMaxLine>
          </Link>

          {!largePost && (
            <Stack direction="row" alignItems="center" sx={{ typography: 'caption' }}>
              <Avatar src="/assets/images/crepid/logo.icon.png" sx={{ width: 20, height: 20, mr: 0.5 }} />
              <Typography variant="caption">CREPID</Typography>
            </Stack>
          )}

          {largePost && (
            <>
              <TextMaxLine line={2} variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                {description}
              </TextMaxLine>

              <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                <Avatar src="/assets/images/crepid/logo.icon.png" sx={{ mr: 1 }} />
                CREPID
              </Stack>
            </>
          )}
        </Stack>
      </Box>
    </Card>
  );
}
