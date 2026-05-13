import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/career", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sea/10 bg-shell/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold tracking-tight text-ink group-hover:text-sea sm:text-2xl">
            Wu&apos;s Bistro Group
          </span>
          <span className="max-w-[min(100%,14rem)] text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-sea/80 sm:max-w-none sm:text-[11px] sm:tracking-[0.18em]">
            Dining group · Data-driven · Product innovation
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-medium text-ink/85">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-coral"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
