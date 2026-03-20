import { MDXRemote } from 'next-mdx-remote/rsc';

// Кастомные компоненты для MDX, чтобы они выглядели как в IDE
const components = {
    h1: (props: any) => <h1 className="text-2xl font-bold text-blue-400 mb-6 font-mono" {...props} />,
    h2: (props: any) => <h2 className="text-xl font-semibold text-purple-400 mt-8 mb-4 font-mono border-b border-slate-800 pb-2" {...props} />,
    p: (props: any) => <p className="text-slate-300 leading-relaxed mb-4 font-mono text-sm" {...props} />,
    code: (props: any) => <code className="bg-slate-800 px-1.5 py-0.5 rounded text-orange-300 text-xs font-mono" {...props} />,
    pre: (props: any) => (
        <pre className="bg-[#1e1e1e] border border-slate-800 rounded-lg p-4 overflow-x-auto my-6 shadow-xl" {...props} />
    ),
    ul: (props: any) => <ul className="list-none space-y-2 mb-6" {...props} />,
    li: (props: any) => (
        <li className="flex items-start gap-3 text-slate-400 font-mono text-sm">
            <span className="text-blue-500/50 mt-1">➜</span>
            {props.children}
        </li>
    ),
    a: (props: any) => (
        <a
            className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30 underline-offset-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        />
    ),
};

export function MDXContent({ source }: { source: string }) {
    return (
        <div className="prose prose-invert max-w-none">
            <MDXRemote source={source} components={components} />
        </div>
    );
}