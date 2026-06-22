import Link from "next/link";
import {
  BUSINESS_EMAIL,
  BUSINESS_LEGAL_NAME,
  BUSINESS_PHONE_DISPLAY,
  PRIVACY_POLICY_URL,
  SMS_HELP_KEYWORD,
  SMS_OPT_OUT_KEYWORD,
  SMS_RESERVATION_PHONE_DISPLAY,
  SMS_RESERVE_KEYWORD,
} from "@/lib/sms-config";

const lastUpdated = "June 21, 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        Terms &amp; conditions
      </h1>
      <p className="mt-4 text-sm text-ink/55">Last updated: {lastUpdated}</p>
      <p className="mt-6 leading-relaxed text-ink/75">
        These terms govern your use of websites and digital services operated by{" "}
        {BUSINESS_LEGAL_NAME}, including wubistro.com, our SMS reservation
        program, and related guest communications for Xie Bao and Wu&apos;s Fish
        House.
      </p>

      <section className="mt-12 space-y-10 text-sm leading-relaxed text-ink/75">
        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Acceptance
          </h2>
          <p className="mt-4">
            By using our sites, contacting us, or opting into SMS, you agree to
            these terms and our{" "}
            <Link href="/privacy" className="text-coral hover:underline">
              privacy policy
            </Link>
            . If you do not agree, do not use the services.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Reservations &amp; dining
          </h2>
          <p className="mt-4">
            Reservations are subject to availability. We may modify hours,
            menus, or policies. Deposits, cancellation windows, and large-party
            rules communicated at booking apply to your visit. Guest conduct
            must respect staff and other guests.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            SMS terms
          </h2>
          <p className="mt-4">
            Our SMS program lets you request and manage reservations by texting{" "}
            <strong>{SMS_RESERVE_KEYWORD}</strong> to{" "}
            {SMS_RESERVATION_PHONE_DISPLAY}. Full opt-in details are in our{" "}
            <Link href="/sms-compliance" className="text-coral hover:underline">
              SMS opt-in policy
            </Link>
            .
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              You must be the subscriber or authorized user of the mobile number
              you use to text us.
            </li>
            <li>
              Message frequency varies. Message and data rates may apply per
              your carrier plan.
            </li>
            <li>
              Reply <strong>{SMS_OPT_OUT_KEYWORD}</strong> to cancel. Reply{" "}
              <strong>{SMS_HELP_KEYWORD}</strong> for help.
            </li>
            <li>
              Consent to SMS is not required to purchase goods or services—you
              may book by phone, email, or our guest website.
            </li>
            <li>
              We are not liable for delayed or undelivered messages due to
              carriers or device issues.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Website use
          </h2>
          <p className="mt-4">
            Content on this site is for general information. We strive for
            accuracy but do not warrant that all information is complete or
            current. You may not misuse the site (scraping, unauthorized access,
            unlawful content).
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Intellectual property
          </h2>
          <p className="mt-4">
            Trademarks, logos, photography, and copy are owned by{" "}
            {BUSINESS_LEGAL_NAME} or licensors. No license is granted except for
            personal, non-commercial viewing.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Disclaimer &amp; limitation of liability
          </h2>
          <p className="mt-4">
            Services are provided &quot;as is&quot; to the fullest extent
            permitted by law. {BUSINESS_LEGAL_NAME} is not liable for indirect
            or consequential damages arising from site or SMS use. Some
            jurisdictions do not allow certain limitations; those limits may not
            apply to you.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Governing law
          </h2>
          <p className="mt-4">
            These terms are governed by the laws of the State of New York,
            without regard to conflict-of-law rules, except where mandatory
            consumer protections apply in your state of residence.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Contact
          </h2>
          <p className="mt-4">
            {BUSINESS_LEGAL_NAME}
            <br />
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="text-coral hover:underline"
            >
              {BUSINESS_EMAIL}
            </a>
            <br />
            {BUSINESS_PHONE_DISPLAY}
            <br />
            Privacy policy:{" "}
            <a href={PRIVACY_POLICY_URL} className="text-coral hover:underline">
              {PRIVACY_POLICY_URL}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
