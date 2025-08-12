import clsx from "clsx";

type SpinLoaderProps = {
  containerClasses?: string;
};

export function SpinLoader({ containerClasses = "" }: SpinLoaderProps) {
  const container = clsx("flex", "items-center", "justify-center");
  const borders = clsx(
    "w-10",
    "h-10",
    "border-5",
    "border-t-transparent",
    "border-slate-900",
    "rounded-full",
    "animate-spin"
  );

  return (
    <div className={container}>
      <div className={borders}></div>
    </div>
  );
}
