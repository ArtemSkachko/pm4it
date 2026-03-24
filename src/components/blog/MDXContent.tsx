import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';

// Определяем типы для пропсов, чтобы избавиться от any
type MDXComponentProps = React.HTMLAttributes<HTMLElement>;
type MDXAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const components = {
    h1: (props: MDXComponentProps) => <h1 className="text-2xl font-bold text-blue-400 mb-6 font-mono" {...props} />,
    h2: (props: MDXComponentProps) => <h2 className="text-xl font-bold text-white mb-4 font-mono border-b border-slate-800 pb-2" {...props} />,
    p: (props: MDXComponentProps) => <p className="text-slate-400 leading-relaxed mb-6 text-sm" {...props} />,
    code: (props: MDXComponentProps) => <code className="bg-slate-800 px-1.5 py-0.5 rounded text-orange-300 text-xs font-mono" {...props} />,
    pre: (props: MDXComponentProps) => (
        <pre className="bg-[#1e1e1e] border border-slate-800 rounded-lg p-4 overflow-x-auto my-6 shadow-xl" {...props} />
    ),
    ul: (props: MDXComponentProps) => <ul className="list-none space-y-2 mb-6" {...props} />,
    li: (props: MDXComponentProps) => (
        <li className="flex items-start gap-3 text-slate-400 font-mono text-sm">
            <span className="text-blue-500/50 mt-1">→</span>
            <span>{props.children}</span>
        </li>
    ),
    a: (props: MDXAnchorProps) => (
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