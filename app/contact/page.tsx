import { RestaurantLocations } from "@/components/RestaurantLocations";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        Let&apos;s talk—guests, partners, or data engagements
      </h1>
      <p className="mt-6 leading-relaxed text-ink/75">
        Use the channels below for general inquiries, press, vendor onboarding,
        or professional services. We route legal and filing-address requests
        through the same mailbox with a dedicated subject line.
      </p>

      <dl className="mt-12 space-y-8 rounded-2xl border border-sea/10 bg-white p-8 shadow-sm">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-sea">
            Corporate email
          </dt>
          <dd className="mt-2">
            <a
              href="mailto:info@WuBistro.com"
              className="text-lg font-semibold text-coral hover:underline"
            >
              info@WuBistro.com
            </a>
            <p className="mt-2 text-sm text-ink/60">
              Holding company, data/AI engagements, vendor &amp; press.
            </p>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-sea">
            Guest brand (Xie Bao USA)
          </dt>
          <dd className="mt-2 text-ink/85">
            <a
              href="https://xiebaousa.com/"
              className="text-lg font-semibold text-coral hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              xiebaousa.com
            </a>
            <p className="mt-2 text-sm text-ink/60">
              Restaurant inquiries:{" "}
              <a
                href="mailto:info@xiebaousa.com"
                className="font-medium text-ink hover:text-coral"
              >
                info@xiebaousa.com
              </a>
              . Phone numbers for each market are published on the guest site.
            </p>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-sea">
            Phone
          </dt>
          <dd className="mt-2">
            <a
              href="tel:+12125550149"
              className="text-lg font-semibold text-ink hover:text-coral"
            >
              +1 (212) 555-0149
            </a>
            <p className="mt-2 text-sm text-ink/60">
              Corporate placeholder line—use location-specific numbers from{" "}
              <a
                href="https://xiebaousa.com/"
                className="text-coral underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                xiebaousa.com
              </a>{" "}
              or your live PBX when available.
            </p>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-sea">
            Restaurant addresses
          </dt>
          <dd className="mt-3">
            <RestaurantLocations />
            <p className="mt-6 text-sm text-ink/60">
              For reservations or catering, email with the location name in the
              subject line (e.g. &quot;Flushing — private event&quot;).
            </p>
          </dd>
        </div>
      </dl>
    </div>
  );
}
