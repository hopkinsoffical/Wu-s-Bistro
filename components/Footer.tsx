import Link from "next/link";
import { RestaurantLocations } from "@/components/RestaurantLocations";

export function Footer() {
  return (
    <footer className="border-t border-sea/15 bg-ink text-shell/90">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              Wu&apos;s Bistro Group
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-shell/75">
              Operator of Xie Bao (蟹宝) and Wu&apos;s Fish House in Manhattan,
              Flushing, and Edison—paired with internal data, AI, and business
              intelligence.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/contact", "Contact"],
                ["/career", "Careers"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://xiebaousa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Xie Bao USA ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@WuBistro.com"
                  className="hover:text-white"
                >
                  info@WuBistro.com
                </a>
              </li>
              <li>
                <a href="tel:+17243906466" className="hover:text-white">
                  +1 (724) 390-6466
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/xie_bao_crabhouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Instagram — @xie_bao_crabhouse ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">
            Restaurant locations
          </p>
          <RestaurantLocations compact layout="grid" className="mt-4" />
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-shell/50">
        © {new Date().getFullYear()} Wu&apos;s Bistro Group. All rights reserved.
      </div>
    </footer>
  );
}
