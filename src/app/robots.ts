import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/', '/*.json$'],
    },
    sitemap: 'https://rewards.bing.com/sitemap.xml',
    host: 'https://rewards.bing.com',
  };
}