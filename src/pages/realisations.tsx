// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CrepidRealisationsView } from 'src/sections/_crepid/view';

// ----------------------------------------------------------------------

RealisationsPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function RealisationsPage() {
  return (
    <>
      <Head>
        <title>Nos Réalisations - CREPID</title>
      </Head>

      <CrepidRealisationsView />
    </>
  );
}
