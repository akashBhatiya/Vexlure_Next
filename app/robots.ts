import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vexlureinternational.com/'}/sitemap.xml`,
  }
}
