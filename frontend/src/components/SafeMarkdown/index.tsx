import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  const mainDivClasses = clsx(
    'prose prose-slate',
    'w-full max-w-none',
    'overflow-hidden',
    'prose-a:transition',
    'prose-a:text-blue-500',
    'prose-a:hover:text-blue-700',
    'prose-a:hover:underline',
    'prose-img:mx-auto',
    'md:prose-lg'
  );

  const tableClasses = clsx('w-full min-w-[600px]');

  return (
    <div className={mainDivClasses}>
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return '';

            return (
              <div className="overflow-x-auto">
                <table className={tableClasses} {...props} />
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
