// next
import NextLink from 'next/link';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Card, Typography, Link } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

type Props = {
  topic: {
    cover: string;
    totalPost: number;
    category: string;
  };
};

export default function TopicItem({ topic }: Props) {
  const theme = useTheme();

  const { cover, totalPost, category } = topic;

  return (
    <Card sx={{ '&:hover img': { transform: 'scale(1.1)' } }}>
      <Box sx={{ position: 'relative' }}>
        <Image
          alt={category}
          src={cover}
          ratio="4/3"
          sx={{
            transition: (theme) =>
              theme.transitions.create('transform', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.complex,
              }),
          }}
        />

        <Box
          sx={{
            p: 3,
            gap: 0.5,
            width: 1,
            height: 1,
            zIndex: 9,
            display: 'flex',
            position: 'absolute',
            color: 'common.white',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            ...bgGradient({
              direction: 'to top',
              startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
              endColor: `${theme.palette.grey[900]} 75%`,
            }),
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            {totalPost} services
          </Typography>

          <Link component={NextLink} href={paths.travel.posts} color="inherit" underline="none">
            <Typography variant="h6">{category}</Typography>
          </Link>
        </Box>
      </Box>
    </Card>
  );
}
