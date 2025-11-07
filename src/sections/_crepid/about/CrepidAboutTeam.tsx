// @mui
import { Typography, Container, Stack } from '@mui/material';
// types
import { ITeamMemberProps } from 'src/types/team';
//
import TeamTravel from '../../team/travel';

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function CrepidAboutTeam({ members }: Props) {
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
        <Typography variant="h2">Nos Ressources Humaines</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Une équipe d'experts qualifiés avec plus de 17 ans d'expérience dans divers domaines 
          de l'agriculture, l'élevage, l'environnement et le développement rural.
        </Typography>
      </Stack>

      <TeamTravel members={members} />
    </Container>
  );
}
