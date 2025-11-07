// next
import NextLink from 'next/link';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
// @mui
import { Stack, Avatar, Link, Typography } from '@mui/material';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
//
import PostTimeBlock from 'src/sections/blog/components/PostTimeBlock';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function PostItem({ post }: Props) {
  const { id, title, coverImg, createdAt } = post;

  return (
    <Stack spacing={2}>
      <Image src={coverImg} alt={title} ratio="1/1" sx={{ borderRadius: 2 }} />

      <Stack spacing={1}>
        <PostTimeBlock createdAt={fDate(createdAt)} />

        <Link component={NextLink} href={`/service/${id}`} color="inherit">
          <TextMaxLine variant="h6" persistent>
            {title}
          </TextMaxLine>
        </Link>
      </Stack>

      <Stack spacing={1} direction="row" alignItems="center">
        <Avatar src="/assets/images/crepid/logo.icon.png" sx={{ mr: 1 }} />
        <Typography variant="body2">CREPID</Typography>
      </Stack>
    </Stack>
  );
}
