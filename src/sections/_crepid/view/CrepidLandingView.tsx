// @mui
import { alpha } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
// _mock
import { _tours, _blogTravelPosts, _testimonials, _brands, _members } from 'src/_mock';
//
import NewsletterTravel from '../../newsletter/travel';
import OurClientsTravel from '../../our-clients/travel';
import TeamTravel from '../../team/travel';
import {
  CrepidLandingHero,
  CrepidLandingVision,
  CrepidLandingObjectives,
  CrepidLandingDomainesCarousel,
  CrepidLandingRealisations,
  CrepidLandingExemples,
  CrepidLandingBeneficiaires,
  CrepidLandingEquipe,
  CrepidLandingPerspectives,
  CrepidLandingReferences,
  CrepidLandingTestimonials,
  CrepidLandingActualites,
} from '../landing';

// ----------------------------------------------------------------------

export default function CrepidLandingView() {
  return (
    <>
      {/* 2️⃣ Section Héros */}
      <Box sx={{ position: 'relative' }}>
        <CrepidLandingHero />
      </Box>

      {/* 3️⃣ Vision & Ambitions */}
      <CrepidLandingVision />

      {/* 4️⃣ Objectifs du CREPID */}
      <CrepidLandingObjectives />

      {/* 4️⃣ Domaines d'Intervention - Carousel */}
      <CrepidLandingDomainesCarousel />

      {/* 5️⃣ Réalisations */}
      <CrepidLandingRealisations />

      {/* 8️⃣ Nos Bénéficiaires / Public Cible */}
      <CrepidLandingBeneficiaires />

      {/* 9️⃣ Nos Ressources et Équipe */}
      <CrepidLandingEquipe members={_members} />

      {/* 🔟 Projets en Perspective */}
      <CrepidLandingPerspectives />

      {/* Références détaillées et exemples de réalisations */}
      <CrepidLandingReferences />
    </>
  );
}
