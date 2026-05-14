import { MetadataRoute } from 'next'
import { dataConst } from '@/constants/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.beatrizdantas.adv.br'
  
  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Páginas de áreas de atuação
  const areaPages = dataConst.pt.areas.map((area) => ({
    url: `${baseUrl}/atuacao${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...areaPages]
}
