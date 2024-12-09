"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use, useEffect, useLayoutEffect, useRef, useState } from "react";

import Banner from "@public/banner.webp";

export default function SectionBanner() {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-10">
      <Image src={Banner} alt="Banner Section" width={1920} height={631} />
    </div>
  );
}
