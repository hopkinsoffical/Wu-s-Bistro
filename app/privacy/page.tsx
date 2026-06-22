import Link from "next/link";
import {
  BUSINESS_EMAIL,
  BUSINESS_LEGAL_NAME,
  BUSINESS_PHONE_DISPLAY,
  SMS_HELP_KEYWORD,
  SMS_OPT_OUT_KEYWORD,
  SMS_RESERVATION_PHONE_DISPLAY,
  SMS_RESERVE_KEYWORD,
} from "@/lib/sms-config";

const lastUpdated = "June 21, 2026";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        Privacy policy
      </h1>
      <p className="mt-4 text-sm text-ink/55">Last updated: {lastUpdated}</p>
      <p className="mt-6 leading-relaxed text-ink/75">
        {BUSINESS_LEGAL_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
        respects your privacy. This policy describes how we collect, use, and
        protect information when you visit wubistro.com, contact us, dine at our
        restaurants, or use our SMS reservation service.
      </p>

      <section className="mt-12 space-y-10 text-sm leading-relaxed text-ink/75">
        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Information we collect
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Contact details:</strong> name,
              email address, phone number, and reservation preferences you
              provide.
            </li>
            <li>
              <strong className="text-ink">SMS data:</strong> mobile number,
              message content, timestamps, and delivery status when you text our
              reservation line.
            </li>
            <li>
              <strong className="text-ink">Website usage:</strong> standard
              server logs (IP address, browser type, pages viewed) for security
              and performance.
            </li>
            <li>
              <strong className="text-ink">In-restaurant:</strong> information
              you share for reservations, feedback, loyalty, or employment
              applications.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            How we use information
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Process and manage table reservations and guest requests.</li>
            <li>
              Send reservation confirmations, reminders, and service-related SMS
              or email.
            </li>
            <li>Operate, secure, and improve our websites and restaurants.</li>
            <li>Comply with law, carrier rules, and fraud prevention.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            SMS reservation program
          </h2>
          <p className="mt-4">
            When you text <strong>{SMS_RESERVE_KEYWORD}</strong> to{" "}
            {SMS_RESERVATION_PHONE_DISPLAY}, you opt in to receive SMS from{" "}
            {BUSINESS_LEGAL_NAME} as described on our{" "}
            <Link href="/sms-compliance" className="text-coral hover:underline">
              SMS opt-in policy
            </Link>{" "}
            and{" "}
            <Link href="/booking" className="text-coral hover:underline">
              reservations page
            </Link>
            . We use your mobile number only for the purposes disclosed at
            opt-in. Reply <strong>{SMS_OPT_OUT_KEYWORD}</strong> to stop
            messages or <strong>{SMS_HELP_KEYWORD}</strong> for help. Message and
            data rates may apply.
          </p>
          <p className="mt-4">
            SMS is delivered via Twilio. Twilio may process message metadata as
            our service provider under their own privacy terms.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Sharing
          </h2>
          <p className="mt-4">
            We do not sell your personal information. We may share data with
            service providers (e.g., SMS platform, reservation tools, payroll for
            employees) under contract, with regulators when required, or in
            connection with a business transfer.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Retention &amp; security
          </h2>
          <p className="mt-4">
            We retain information as long as needed for reservations, legal
            obligations, and dispute resolution. We use reasonable administrative
            and technical safeguards; no method of transmission is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Your choices
          </h2>
          <p className="mt-4">
            You may request access, correction, or deletion of personal
            information where applicable law provides rights. Contact us at{" "}
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="text-coral hover:underline"
            >
              {BUSINESS_EMAIL}
            </a>
            . California and other state privacy rights requests are handled at
            the same address.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Children
          </h2>
          <p className="mt-4">
            Our services are not directed to children under 13. We do not
            knowingly collect their personal information.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Changes &amp; contact
          </h2>
          <p className="mt-4">
            We may update this policy; the &quot;Last updated&quot; date will
            change. Questions:{" "}
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="text-coral hover:underline"
            >
              {BUSINESS_EMAIL}
            </a>{" "}
            or {BUSINESS_PHONE_DISPLAY}.
          </p>
        </div>
      </section>
    </div>
  );
}
