// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CrepidLandingView } from 'src/sections/_crepid/view';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>CREPID - Centre de Recherche et d'Expertise pour le Développement Intégré et Durable</title>
      </Head>

      <CrepidLandingView />
    </>
  );
}
