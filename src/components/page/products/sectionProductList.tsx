"use client";
import Image from "next/image";
import Link from "next/link";

import ProductTitle from "@public/produk-title.webp";

export default function SectionProductList() {
  const productList = [
    {
      src: "/produk/product list/truss rigging/Rigging Background.webp",
      alt: "Produk Kami",
      title: "Truss Rigging",
      intro:
        "Truss rigging kami, solusi andal untuk struktur event kuat dan estetis, menciptakan pengalaman acara memukau.",
      // link: "/products/truss-rigging",
      link: '/products/inprogress'
    },
    {
      src: "/produk/product list/sound system/Sound System Background.webp",
      alt: "Produk Kami",
      title: "Sound System",
      intro:
        "Sound system berkualitas tinggi untuk event Anda, menghadirkan audio jernih dan pengalaman tak terlupakan.",
      // link: "/products/sound-system",
      link: '/products/inprogress'
    },
    {
      src: "/produk/product list/lighting/Lighting Background.webp",
      alt: "Produk Kami",
      title: "Lighting",
      intro:
        "Solusi lighting event berkualitas tinggi untuk menciptakan suasana yang mengesankan dan tak terlupakan di setiap acara.",
      // link: "/products/lighting",
      link: '/products/inprogress'
    },
    {
      src: "/produk/product list/vfx/VFX Background.webp",
      alt: "Produk Kami",
      title: "VFX",
      intro:
        "Jadikan event Anda spektakuler dengan efek visual (VFX) yang memukau dan pengalaman tak terlupakan!",
      // link: "/products/vfx",
      link: '/products/inprogress'
    },
    {
      src: "/produk/product list/videotron/Videotron Background.webp",
      alt: "Produk Kami",
      title: "Videotron",
      intro:
        "Videotron kami hadirkan dengan kualitas visual tinggi untuk memukau audiens dan memperkuat acara Anda.",
      link: "/products/videotron",
      // link: '/products/inprogress'
    },
    {
      src: "/produk/product list/genset/Genset Background.webp",
      alt: "Produk Kami",
      title: "Genset",
      intro:
        "Genset kami andal, efisien, dan siap memenuhi kebutuhan listrik darurat atau operasional Anda kapan saja.",
      link: "/products/genset",
      // link: '/products/inprogress'
    },
    {
      src: "/produk/product list/tenda dekor/Tenda Dekor Background.webp",
      alt: "Produk Kami",
      title: "Tenda & Dekorasi",
      intro:
        "Tenda dan Dekorasi elegan untuk setiap acara, menciptakan suasana indah dan berkesan.",
      // link: "/products/tenda-dekor",
      link: '/products/inprogress'
    },
    {
      src: "/produk/product list/kursi/Kursi Background.webp",
      alt: "Produk Kami",
      title: "Kursi",
      intro:
        "Kursi event nyaman dan elegan, ideal untuk acara formal dan informal dengan desain menarik.",
      link: "/products/kursi",
      // link: '/products/inprogress'
    },
    {
      src: "/produk/product list/meja/Meja Background.webp",
      alt: "Produk Kami",
      title: "Meja",
      intro:
        "Meja event praktis dan stylish, cocok untuk berbagai acara dengan desain yang memukau.",
      // link: "/products/meja",
      link: '/products/inprogress'
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col p-5">
        <div>
          <Image
            src={ProductTitle}
            alt="title produk"
            className="md:w-[25%] w-[50%] mb-10"
            width={640}
            height={200}
          />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {productList.map((item, index) => (
              <div
                className="card bg-base-100 image-full w-auto shadow-xl"
                key={index}
              >
                <figure>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={500}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-sm md:text-lg">
                    {item.title}
                  </h2>
                  <p className="text-xs md:text-lg">{item?.intro}</p>
                  <div className="card-actions justify-end">
                    <Link
                      href={item.link}
                      className="btn btn-primary text-white"
                    >
                      More Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
