import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function BlogListPage() {
    const contentDir = path.join(process.cwd(), 'src/content');
    const files = fs.readdirSync(contentDir);

    const posts = files.map(filename => {
        const slug = filename.replace('.mdx', '');
        const fileContent = fs.readFileSync(path.join(contentDir, filename), 'utf8');
        const { data } = matter(fileContent);
        return { slug, ...data };
    });

    return (
        <main className="min-h-screen bg-[#0d1117] p-8 md:p-24 font-mono">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-slate-600">01.</span> Projects & Thoughts
                </h1>

                <div className="space-y-4">
                    {posts.map((post: any) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block p-6 border border-slate-800 rounded-xl hover:bg-slate-900 transition-all border-l-4 hover:border-l-blue-500"
                        >
                            <div className="text-xs text-slate-500 mb-2">{post.date}</div>
                            <h2 className="text-xl font-bold text-slate-200 group-hover:text-blue-400 transition">
                                {post.title}
                            </h2>
                            <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                                {post.summary}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}