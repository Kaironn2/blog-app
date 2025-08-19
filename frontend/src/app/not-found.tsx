import clsx from 'clsx';

export default function NotFoundPage() {
  const mainDivClasses = clsx(
    'min-h-[320px] bg-slate-900 text-slate-100',
    'mb-16 p-8 rounded-xl',
    'flex items-center justify-center text-center'
  );

  const h1Classes = clsx('text-7xl/tight mb-4 font-extrabold');

  return (
    <div className={mainDivClasses}>
      <div>
        <h1 className={h1Classes}>404</h1>
        <p>Erro 404 - A página que você está tentando acessar não existe.</p>
      </div>
    </div>
  );
}
