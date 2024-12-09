import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingPage from "./loading";

const TrussDetail = dynamic(() => import('@/components/page/products/slugs/trussDetail'))
const SoundSystemDetail = dynamic(() => import('@/components/page/products/slugs/soundDetail'))
const LightingDetail = dynamic(() => import('@/components/page/products/slugs/lightingDetail'))
const VFXDetail = dynamic(() => import('@/components/page/products/slugs/vfxDetail'))
const VideotronDetail = dynamic(() => import('@/components/page/products/slugs/videotronDetail'))
const GeneratorDetail = dynamic(() => import('@/components/page/products/slugs/generatorDetail'))
const TendaDekorDetail = dynamic(() => import('@/components/page/products/slugs/tendadekorDetail'))
const KursiDetail = dynamic(() => import('@/components/page/products/slugs/kursiDetail'))
const MejaDetail = dynamic(() => import('@/components/page/products/slugs/mejaDetail'))
const StillInProgress = dynamic(() => import('@/components/page/products/slugs/inprogressDetail'))

export default async function ProductsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <>
    <Suspense fallback={<LoadingPage />}>
      {(() => {
        switch (slug) {
          case "truss-rigging":
            return <TrussDetail />;
          case "sound-system":
            return <SoundSystemDetail />;
          case "lighting":
            return <LightingDetail />;
          case "vfx":
            return <VFXDetail />;
          case "videotron":
            return <VideotronDetail />;
          case "genset":
            return <GeneratorDetail />;
          case "tenda-dekor":
            return <TendaDekorDetail />;
          case "kursi":
            return <KursiDetail />;
          case "meja":
            return <MejaDetail />;
          default:
            return <StillInProgress />;
        }
      })()}
      </Suspense>
    </>
  );
}
