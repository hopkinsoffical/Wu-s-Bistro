import Image from "next/image";
import Link from "next/link";

/** Transparent PNG at `public/images/wu-logo.png` (replace file to update artwork). */
const LOGO_SRC = "/images/wu-logo.png";

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
          <span className="flex shrink-0 items-center">
            <Image
              src={LOGO_SRC}
              alt="Wu's Bistro Group"
              width={200}
              height={200}
              className="h-11 w-auto max-h-11 max-w-[5.25rem] object-contain object-left sm:h-14 sm:max-h-14 sm:max-w-[6.75rem]"
              sizes="108px"
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
