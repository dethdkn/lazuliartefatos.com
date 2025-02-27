import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap{
  return [
    {
      url: 'https://lazuliartefatos.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // {
    //   url: 'https://lazuliartefatos.com/ecobags',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: 'https://lazuliartefatos.com/ceramica',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: 'https://lazuliartefatos.com/quadros',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
  ]
}
