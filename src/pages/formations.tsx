// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CrepidFormationsView } from 'src/sections/_crepid/view';

// ----------------------------------------------------------------------

FormationsPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function FormationsPage() {
  return (
    <>
      <Head>
        <title>Nos Formations - CREPID</title>
      </Head>

      <CrepidFormationsView />
    </>
  );
}
