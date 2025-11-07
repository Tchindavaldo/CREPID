// @mui
import { Typography, Container, Stack } from '@mui/material';
// types
import { ITestimonialProps } from 'src/types/testimonial';
//
import TestimonialTravel from '../../testimonial/travel';

// ----------------------------------------------------------------------

type Props = {
  testimonials: ITestimonialProps[];
};

export default function CrepidLandingTestimonials({ testimonials }: Props) {
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
          Témoignages
        </Typography>

        <Typography variant="h2">Ce que disent nos bénéficiaires</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Découvrez les témoignages de ceux qui ont bénéficié de nos formations et 
          accompagnements dans leurs projets de développement.
        </Typography>
      </Stack>

      <TestimonialTravel testimonials={testimonials} />
    </Container>
  );
}
