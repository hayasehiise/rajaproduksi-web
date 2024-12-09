import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://rajaproduksiindonesia.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://rajaproduksiindonesia.com/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://rajaproduksiindonesia.com/products',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        }
    ]
}