import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Raja Produksi Indonesia",
    description: "About Page",
  };
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        {children}
        </>
    )
  }