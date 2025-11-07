// @mui
import { Stack, StackProps, Box } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  createdAt: string;
  duration?: string;
}

export default function PostTimeBlock({ createdAt, duration, sx, ...other }: Props) {
  return (
    <Stack
      flexWrap="wrap"
      direction="row"
      alignItems="center"
      sx={{ typography: 'caption', color: 'text.disabled', ...sx }}
      {...other}
    >
      Intervention
    </Stack>
  );
}
