import Image from "next/image";
import AboutImage from "@public/about-banner.webp";

export default function SectionAbout() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
            <Image src={AboutImage} alt="About" width={300} height={300} className="mt-10" />
            </div>
            <div className="w-full xl:w-1/2 flex justify-start">
            <p className="p-5 text-white text-sm xl:text-base text-justify"><span className=" font-bold">Raja Produksi Indonesia</span> adalah penyedia jasa produksi yang berfokus pada penyediaan segala kebutuhan panggung dan event besar.
                kami menawarkan solusi lengkap khusus untuk meciptakan acara yang memukau, mulai dari penyediaan panggung, tata cahaya, tata suara, hingga efek khusus.
                dengan tim profesional dan peralatan terkini, kami siap membantu anda mengubah visi acara menjadi kenyataan. baik itu konser, konferensi, atau acaraperusahaan,
                kami berdedikasi untuk memberikan hasil terbaik yang membuat setiap moment tak terlupakan. kepercayaan anda adalah prioritas kami, dan kami selalu berusaha melebihi ekspektasi anda.
            </p>
            </div>
        </div>
    )
}