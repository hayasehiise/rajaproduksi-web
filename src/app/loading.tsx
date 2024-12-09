import Image from "next/image";

export default function LoadingHomepage() {
  return (
    <div className="w-full h-dvh flex flex-col">
      <div>
        <Image
          src={`/footer logo.webp`}
          alt="logo"
          width={500}
          height={500}
          className="my-5 w-1/3 mx-auto"
        />
      </div>
      <div>
        <Image src={"/loading.gif"} alt="loading..." className="mx-auto" width={200} height={200} />
      </div>
    </div>
  );
}
