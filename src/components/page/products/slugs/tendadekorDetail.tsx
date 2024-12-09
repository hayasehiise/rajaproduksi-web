'use client'
import Image from "next/image";
import Link from "next/link";

import ProductTitle from "@public/produk-title.webp";

export default function TendaDekorDetail() {
  return (
    <>
      <div className="w-full flex flex-col p-5">
        <div className="w-full flex flex-row md:gap-5 gap-2 justify-center">
          <div className="md:w-[5%] w-[10%] my-auto">
            <Link href={`/products`}>
              <Image
                src={`/back-arrow.webp`}
                alt="back"
                className="w-full"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="w-full my-auto">
            <Image
              src={ProductTitle}
              alt="title produk"
              className="md:w-[25%] w-[50%]"
              width={640}
              height={200}
            />
          </div>
        </div>
        <div className="my-10">
          <p className="text-6xl text-white font-black">Tenda & Dekorasi Detail</p>
        </div>
      </div>
    </>
  );
}