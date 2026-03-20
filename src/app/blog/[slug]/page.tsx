import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MDXContent } from '@/components/blog/MDXContent';
import { getBlogSchema } from '@/lib/seo';

export default async function PostPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);

    if (!fs.existsSync(filePath)) notFound();

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return (
        <main className="min-h-screen bg-[#0d1117] text-slate-300 p-6 md:p-12 font-mono">
            {/* SEO Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema(data)) }}
            />

            <article className="max-w-3xl mx-auto">
                {/* "Editor Tab" Style Header */}
                <div className="flex items-center gap-2 mb-12 text-xs text-slate-500 border-b border-slate-800 pb-2">
                    <span className="text-blue-400">~/pm4it/blog/</span>
                    <span>{slug}.mdx</span>
                    <span className="ml-auto opacity-50 italic">Last modified: {data.date}</span>
                </div>

                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
                        {data.title}
                    </h1>
                    <div className="flex gap-3">
                        {data.tags?.map((tag: string) => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded uppercase">
                {tag}
              </span>
                        ))}
                    </div>
                </header>

                <MDXContent source={content} />
            </article>
        </main>
    );
}