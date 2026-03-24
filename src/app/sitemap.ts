import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://pm4it.com';

    // Безопасно получаем список постов блога
    const contentDir = path.join(process.cwd(), 'src/content');
    let blogPosts: MetadataRoute.Sitemap = [];

    if (fs.existsSync(contentDir)) {
        blogPosts = fs.readdirSync(contentDir)
            .filter((file) => file.endsWith('.mdx')) // Берем только .mdx
            .map((file) => ({
                url: `${baseUrl}/blog/${file.replace('.mdx', '')}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.6,
            }));
    }

    // Статические страницы с приоритетами
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0, // Главная — самый высокий приоритет
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9, // Твоя история важна для личного бренда
        },
        {
            url: `${baseUrl}/resume`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9, // Твое CV — цель визита рекрутеров
        },
        {
            url: `${baseUrl}/resources`, // Ссылка на Knowledge_Base
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily', // Блог обновляется чаще
            priority: 0.7,
        },
    ];

    return [...staticPages, ...blogPosts];
}