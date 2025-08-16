import clsx from "clsx";

type ContainerProps = { children: React.ReactNode };

export function Container({ children }: ContainerProps) {
  const mainContainer = clsx("min-h-screen", "text-slate-900 bg-slate-100");
  const secondaryContainer = clsx(
    "max-w-screen-lg",
    "mx-auto",
    "px-8"
  );

  return (
    <div className={mainContainer}>
      <div className={secondaryContainer}>{children}</div>
    </div>
  );
}
