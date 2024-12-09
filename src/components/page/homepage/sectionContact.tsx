"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use, useEffect, useLayoutEffect, useRef, useState } from "react";


export default function SectionContact() {
  return (
    <div className="w-full flex flex-col bg-neutral items-center justify-center p-10">
      <p className="text-white text-2xl xl:text-5xl text-center mb-5">
        Siap Memulai Event Anda? Hubungi Kami Sekarang!
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=628114514545&text=Hai%20Kak.%20Saya%20tertarik%20untuk%20jasa/produknya"
        target="_blank"
      >
        <button className="btn btn-primary text-white">
          <Image
            src={"/phone-call.webp"}
            width={30}
            height={30}
            alt="contact"
            color="white"
          ></Image>
          Contact Us
        </button>
      </a>
    </div>
  );
}
