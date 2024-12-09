"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use, useEffect, useLayoutEffect, useRef, useState } from "react";

export default function SectionIntro() {
  return (
    <div className="w-full flex flex-col mb-10 p-10 justify-center items-center text-white">
      <p className="font-bold text-2xl xl:text-4xl text-center mb-5">
        Selamat Datang di Raja Produksi Indonesia – Solusi Terbaik untuk
        Kebutuhan Acara dan Promosi Anda!
      </p>
      <p className="text-justify text-sm xl:text-lg">
        Di Raja Produksi Indonesia, kami menyediakan berbagai layanan dan produk
        berkualitas untuk memastikan acara dan promosi Anda berjalan dengan
        sukses. Mulai dari videotron yang memukau, backdrop yang elegan, hingga
        booth custom yang unik, kami memiliki semua yang Anda butuhkan untuk
        menciptakan pengalaman yang tak terlupakan. Dengan dedikasi pada
        kualitas dan kepuasan pelanggan, tim kami siap bekerja sama dengan Anda
        untuk mewujudkan visi Anda.
      </p>
    </div>
  );
}
