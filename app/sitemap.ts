import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vectorium.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/marketplace', '/about', '/contact', '/auth/signin', '/auth/signup'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
