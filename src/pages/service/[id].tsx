// next
import Head from 'next/head';
import { useRouter } from 'next/router';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CrepidServiceDetailView } from 'src/sections/_crepid/view';

// ----------------------------------------------------------------------

ServiceDetailPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ServiceDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Service CREPID | CREPID</title>
      </Head>

      <CrepidServiceDetailView serviceId={id as string} />
    </>
  );
}
