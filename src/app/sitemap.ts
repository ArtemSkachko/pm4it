import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://pm4it.com';

    // Получаем список постов блога
    const contentDir = path.join(process.cwd(), 'src/content');
    const blogPosts = fs.readdirSync(contentDir).map((file) => ({
        url: `${baseUrl}/blog/${file.replace('.mdx', '')}`,
        lastModified: new Date(),
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/resume`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...blogPosts,
    ];
}