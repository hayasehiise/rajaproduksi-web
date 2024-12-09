import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Raja Produksi Indonesia",
    description: "Products Page",
  };
export default function ProductsLayout({
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