// @mui
import { Typography, Stack, IconButton, Link } from '@mui/material';
// types
import { ITeamMemberProps } from 'src/types/team';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  member: ITeamMemberProps;
};

export default function TeamMember({ member }: Props) {
  return (
    <Stack>
      <Image
        src={member.photo}
        alt={member.name}
        ratio="3/4"
        sx={{
          borderRadius: 2,
          mb: 2,
        }}
      />

      <Stack spacing={0.5} sx={{ textAlign: 'center' }}>
        <TextMaxLine variant="h6" line={1}>
          {member.name}
        </TextMaxLine>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {member.role}
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 }}>
          {member.socialLinks?.facebook && (
            <IconButton
              component={Link}
              href={member.socialLinks.facebook}
              target="_blank"
              size="small"
              color="primary"
            >
              <Iconify icon="carbon:logo-facebook" />
            </IconButton>
          )}
          {member.socialLinks?.linkedin && (
            <IconButton
              component={Link}
              href={member.socialLinks.linkedin}
              target="_blank"
              size="small"
              color="primary"
            >
              <Iconify icon="carbon:logo-linkedin" />
            </IconButton>
          )}
          {member.socialLinks?.twitter && (
            <IconButton
              component={Link}
              href={member.socialLinks.twitter}
              target="_blank"
              size="small"
              color="primary"
            >
              <Iconify icon="carbon:logo-twitter" />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
