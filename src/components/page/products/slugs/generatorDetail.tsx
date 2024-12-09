'use client'
import Image from "next/image";
import Link from "next/link";

import ProductTitle from "@public/produk-title.webp";

export default function GeneratorDetail() {
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
        <div className="my-10 flex flex-col gap-5">
          <div>
            <p className="lg:text-6xl text-4xl text-white font-black">Genset Detail</p>
          </div>
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="vt_tabs"
              role="tab"
              className="tab w-full whitespace-nowrap"
              aria-label="Genset 100KVA"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6 w-full"
            >
              <div className="flex md:flex-row flex-col gap-5">
                <div className="w-full">
                  <Image
                    src={`/produk/product list/genset/genset-1.jpeg`}
                    alt="Genset Image"
                    className="w-full border-4 border-solid border-black rounded-md"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="w-full my-auto">
                  <div className="flex flex-row pb-3">
                  <Image src={`/specs.png`} width={100} height={100} className="w-8" alt="icon" />
                  <p className="font-bold text-2xl pl-2">
                    Spesifikasi
                  </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Model</p>
                    <p>: 100 KVA</p>
                    <p>Total Unit</p>
                    <p>: 2 Unit</p>
                  </div>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="vt_tabs"
              role="tab"
              className="tab w-full whitespace-nowrap"
              aria-label="Genset 50KVA"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6 w-full"
            >
              <div className="flex md:flex-row flex-col gap-5">
                <div className="w-full">
                  <Image
                    src={`/produk/product list/genset/genset-2.jpeg`}
                    alt="Genset Image"
                    className="w-full border-4 border-solid border-black rounded-md"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="w-full my-auto">
                  <div className="flex flex-row pb-3">
                  <Image src={`/specs.png`} width={100} height={100} className="w-8" alt="icon" />
                  <p className="font-bold text-2xl pl-2">
                    Spesifikasi
                  </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Model</p>
                    <p>: 50 KVA</p>
                    <p>Total Unit</p>
                    <p>: 1 Unit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}