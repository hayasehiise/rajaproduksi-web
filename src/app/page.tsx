"use client"
import { Suspense } from "react";
import LoadingHomepage from "./loading";
import dynamic from 'next/dynamic'

const SectionBanner = dynamic(() => import('@/components/page/homepage/sectionBanner'));
const SectionIntro = dynamic(() => import('@/components/page/homepage/sectionIntro'));
const SectionGoals = dynamic(() => import('@/components/page/homepage/sectionGoals'))
const SectionProduct = dynamic(() => import('@/components/page/homepage/sectionProduct'))
const SectionContact = dynamic(() => import('@/components/page/homepage/sectionContact'))

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingHomepage />}>
          <SectionBanner />
          <SectionIntro />
          <SectionGoals />
          <SectionProduct />
          <SectionContact />
      </Suspense>
    </>
  );
}