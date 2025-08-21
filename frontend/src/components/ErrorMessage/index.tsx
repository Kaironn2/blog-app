import clsx from 'clsx';

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export function ErrorMessage({
  pageTitle,
  contentTitle,
  content,
}: ErrorMessageProps) {
  const mainDivClasses = clsx(
    'min-h-[320px] bg-slate-900 text-slate-100',
    'mb-16 p-8 rounded-xl',
    'flex items-center justify-center text-center'
  );

  const h1Classes = clsx('text-7xl/tight mb-4 font-extrabold');

  return (
    <>
      <title>{pageTitle}</title>
      <div className={mainDivClasses}>
        <div>
          <h1 className={h1Classes}>{contentTitle}</h1>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
