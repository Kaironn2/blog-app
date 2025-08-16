import clsx from "clsx"

export function Header() {
    const headerClasses = clsx(
        "font-extrabold",
        "text-4xl/normal py-8",
        "sm:text-5xl/normal sm:py-10",
        "md:text-6xl/normal md:py-11",
        "lg:text-7xl/normal lg:py-12"
    )

    return(
        <header>
            <h1 className={headerClasses}>
                <a href="#">Bloghub</a>
            </h1>
        </header>
    )
}
