import Link from "next/link";
import Image from "next/image";

import Logo from "@public/logo.webp";
import Footer from "./footer";

export function Navbar({children} : {children: React.ReactNode}) {
    return (
        <>
        {/* <Navbar /> */}
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <div className="navbar bg-white w-full">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2">
                <Link href={"/"}>
                  <Image src={Logo} alt="logo" width={250} />
                </Link>
              </div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li>
                    <a href={"/products"}>
                    <Image src={'/product-icon.webp'} alt="icon" width={20} height={20} />
                    Products
                    </a>
                  </li>
                  <li>
                    <a href={"/about"}>
                    <Image src={'/about-us.webp'} alt="icon" width={20} height={20} />
                    About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Page content here */}
            <PageContent>
                {children}
            </PageContent>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-white min-h-dvh w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a href={"/"}>
                <Image src={'/home-black.webp'} alt="icon" width={20} height={20} />
                Home
                </a>
              </li>
              <li>
                <a href={"/products"}>
                <Image src={'/product-icon.webp'} alt="icon" width={20} height={20} />
                Products
                </a>
              </li>
              <li>
                <a href={"/about"}>
                <Image src={'/about-us.webp'} alt="icon" width={20} height={20} />
                About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        </>
    )
}

export function PageContent({children} : {children: React.ReactNode}) {
    return(
        <>
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}