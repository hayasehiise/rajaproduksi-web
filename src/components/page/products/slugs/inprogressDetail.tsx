'use client'
import Image from "next/image";
import Link from "next/link";

import ProductTitle from "@public/produk-title.webp";

export default function StillInProgress() {
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
        <div>
          <Image
            src={`/footer logo.webp`}
            alt="logo"
            width={500}
            height={500}
            className="my-10 w-1/3 mx-auto"
          />
        </div>
        <div>
          <p className="text-center text-4xl font-black text-white">
            COMING SOON
          </p>
        </div>
      </div>
    </>
  );
}