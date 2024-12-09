import Image from "next/image";
import FooterLogo from "@public/footer logo.webp";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-primary text-white p-10">
        <aside>
          <Image src={FooterLogo} alt="Footer Logo" width={100} />
          <p>
            <span className="font-bold">Raja Produksi Indonesia</span>
            <br />
            Professional Equipment Event
            <br />
            Copyright © 2024 - All right reserved
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Office & Warehouse</h6>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <div>
                <Image
                  src={"/office.webp"}
                  width={30}
                  height={30}
                  alt="office"
                  color="white"
                ></Image>
              </div>
              <div>
                <Link
                  href="https://maps.app.goo.gl/f9szgrG6MC8tP8FZA"
                  target="_blank"
                >
                  Jl. Setia Budi No.109 C, Besusu Tengah,
                  <br />
                  Kec. Palu Tim., Kota Palu, Sulawesi Tengah 94118
                </Link>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <Image
                  src={"/warehouse.webp"}
                  width={30}
                  height={30}
                  alt="warehouse"
                  color="white"
                ></Image>
              </div>
              <div>
                <Link
                  href="https://maps.app.goo.gl/Gie5xbACXw5Sanr59"
                  target="_blank"
                >
                  Jl.Kayulanga
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <Image
                src={"/whatsapp.webp"}
                width={20}
                height={20}
                alt="mail"
                color="white"
              ></Image>
              <Link href="https://wa.me/628114514545" target="_blank">
                0811-4514-545
              </Link>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                src={"/mail.webp"}
                width={20}
                height={20}
                alt="mail"
                color="white"
              ></Image>
              <Link href="mailto:rajaproduksiindonesia@gmail.com" target="_blank">
                rajaproduksiindonesia@gmail.com
              </Link>
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link
              href="https://www.instagram.com/rajaproduksiindonesia?igsh=eGg1ZWo2bTFkYm9k"
              target="_blank"
            >
              <Image
                src={"/instagram.webp"}
                width={50}
                height={50}
                alt="instagram"
                color="white"
              ></Image>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61563761706680"
              target="_blank"
            >
              <Image
                src={"/facebook.webp"}
                width={50}
                height={50}
                alt="tiktok"
                color="white"
              ></Image>
            </Link>
            <Link
              href="https://www.tiktok.com/@rajaproduksiindonesia"
              target="_blank"
            >
              <Image
                src={"/tiktok.webp"}
                width={50}
                height={50}
                alt="tiktok"
                color="white"
              ></Image>
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
}
