"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";

export default function SectionProduct() {
  
  const image = [
    { src: "/produk/Product 1.webp", alt: "Produk Kami" },
    { src: "/produk/Product 2.webp", alt: "Produk Kami" },
    { src: "/produk/Product 3.webp", alt: "Produk Kami" },
    { src: "/produk/Product 4.webp", alt: "Produk Kami" },
    { src: "/produk/Product 5.webp", alt: "Produk Kami" },
  ];

  return (
    <div className="h-full flex flex-col">
      <div>
        {image.map((item, index) => (
          <Link href="/products" key={index}>
          <Image
            src={item.src}
            alt={item.alt}
            width={1920}
            height={1080}
            className="h-full"
            priority
          />
          </Link>
        ))}
      </div>
    </div>
  );
}
