// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CrepidServicesView } from 'src/sections/_crepid/view';

// ----------------------------------------------------------------------

ServicesPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Nos Services - CREPID</title>
      </Head>

      <CrepidServicesView />
    </>
  );
}
