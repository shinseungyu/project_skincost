import type { MetadataRoute } from 'next';
import postsData from '@/data/posts.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://skindevicecost.com';
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/board`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/qna`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const boardPages: MetadataRoute.Sitemap = postsData.map((post) => ({
    url: `${siteUrl}/board?id=${post.id}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...boardPages];
}
