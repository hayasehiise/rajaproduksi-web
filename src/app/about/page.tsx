"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingPage from "./loading";

const SectionAbout = dynamic(() => import("@/components/page/about/sectionAbout"));

export default function About() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <SectionAbout />
      </Suspense>
    </>
  );
}
