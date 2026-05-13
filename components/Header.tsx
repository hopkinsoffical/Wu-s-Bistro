import Image from "next/image";
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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 leading-tight sm:gap-4"
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-sea/15 bg-ink shadow-sm ring-1 ring-gold/20 sm:h-14 sm:w-14">
            <Image
              src="/images/xiebaologo.png"
              alt="Wu&apos;s Bistro Group — Xie Bao mark"
              fill
              className="object-cover object-center"
              sizes="56px"
              priority
            />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="font-display text-lg font-semibold tracking-tight text-ink group-hover:text-sea sm:text-2xl">
              Wu&apos;s Bistro Group
            </span>
            <span className="max-w-[min(100%,18rem)] text-[10px] font-medium leading-snug tracking-[0.06em] text-sea/85 sm:max-w-none sm:text-[11px] sm:tracking-[0.1em]">
              Delicate Flavor, Timeless Tradition
            </span>
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
