"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use, useEffect, useLayoutEffect, useRef, useState } from "react";

import GoalsTile from "@public/goals-title.webp";

export default function SectionGoals() {
  return (
    <div className="h-dvh flex relative bg-[url(/goals-background.webp)] bg-cover">
      <div className="flex max-h-dvh glassmorph p-5 xl:p-36 justify-center items-center">
        <div className="absolute z-20 -translate-y-1/2 -top-0 left-5 w-full">
          <Image src={GoalsTile} alt="Goals title" className="xl:w-96 w-56" />
        </div>
        <div className="flex flex-col text-white gap-10">
          <div className="flex flex-row gap-5">
            <p className="text-4xl lg:text-6xl font-bold">01</p>
            <p className="text-md lg:text-lg">
              Menyusun dan menyelenggarakan acara yang memberikan pengalaman tak
              terlupakan bagi peserta, dengan memperhatikan setiap detail untuk
              memastikan kepuasan klien dan audiens.
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <p className="text-4xl lg:text-6xl font-bold">02</p>
            <p className="text-md lg:text-lg">
              Memastikan seluruh proses produksi berjalan dengan efisien tanpa
              mengorbankan kualitas, melalui koordinasi yang tepat dan
              penggunaan teknologi serta sumber daya yang inovatif.
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <p className="text-4xl lg:text-6xl font-bold">03</p>
            <p className="text-md lg:text-lg">
              Selalu berusaha untuk membawa ide-ide baru dan solusi kreatif
              dalam setiap produksi acara, untuk menghadirkan konsep yang segar
              dan inovatif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
