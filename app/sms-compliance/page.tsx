import Link from "next/link";
import {
  BOOKING_URL,
  BUSINESS_EMAIL,
  BUSINESS_LEGAL_NAME,
  BUSINESS_PHONE_DISPLAY,
  PRIVACY_POLICY_URL,
  SMS_COMPLIANCE_URL,
  SMS_HELP_KEYWORD,
  SMS_OPT_OUT_KEYWORD,
  SMS_RESERVATION_PHONE_DISPLAY,
  SMS_RESERVE_KEYWORD,
  TERMS_URL,
} from "@/lib/sms-config";

const lastUpdated = "June 21, 2026";

export default function SmsCompliancePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
        SMS compliance
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        SMS opt-in policy &amp; consent
      </h1>
      <p className="mt-4 text-sm text-ink/55">Last updated: {lastUpdated}</p>
      <p className="mt-6 leading-relaxed text-ink/75">
        This page documents how guests provide consent to receive SMS messages
        from {BUSINESS_LEGAL_NAME} (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) for restaurant reservations and related guest
        communications. It is published for carrier and platform review (e.g.,
        Twilio toll-free verification) and for guest transparency.
      </p>

      <nav
        aria-label="SMS policy sections"
        className="mt-10 rounded-xl border border-sea/10 bg-shell/40 p-5 text-sm"
      >
        <p className="font-semibold text-ink">On this page</p>
        <ul className="mt-3 space-y-1 text-coral">
          <li>
            <a href="#business" className="hover:underline">
              Business identity
            </a>
          </li>
          <li>
            <a href="#opt-in-method" className="hover:underline">
              Opt-in method (keyword)
            </a>
          </li>
          <li>
            <a href="#message-types" className="hover:underline">
              Message types &amp; frequency
            </a>
          </li>
          <li>
            <a href="#opt-out" className="hover:underline">
              Opt-out &amp; help
            </a>
          </li>
          <li>
            <a href="#data" className="hover:underline">
              Data use
            </a>
          </li>
          <li>
            <a href="#proof" className="hover:underline">
              Proof URLs
            </a>
          </li>
        </ul>
      </nav>

      <section id="business" className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Business identity
        </h2>
        <dl className="mt-4 space-y-3 text-sm leading-relaxed text-ink/75">
          <div>
            <dt className="font-semibold text-ink">Legal / brand name</dt>
            <dd>{BUSINESS_LEGAL_NAME}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Brands covered</dt>
            <dd>
              Xie Bao (蟹宝), Wu&apos;s Fish House — Manhattan, Flushing, and
              Edison locations
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Contact</dt>
            <dd>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="text-coral hover:underline"
              >
                {BUSINESS_EMAIL}
              </a>
              {" · "}
              {BUSINESS_PHONE_DISPLAY}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">SMS reservation number</dt>
            <dd>{SMS_RESERVATION_PHONE_DISPLAY}</dd>
          </div>
        </dl>
      </section>

      <section id="opt-in-method" className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Opt-in method: keyword (text-to-join)
        </h2>
        <p className="mt-4 leading-relaxed text-ink/75">
          Guests opt in by <strong className="text-ink">initiating an SMS</strong>{" "}
          from their mobile phone. This is a single opt-in via keyword—there is
          no web form checkbox required to start the flow, though this page and
          our{" "}
          <Link href="/booking" className="text-coral hover:underline">
            reservations page
          </Link>{" "}
          disclose the program before guests text us.
        </p>

        <div className="mt-6 rounded-xl border border-coral/25 bg-coral/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-coral">
            Primary opt-in instruction (published on website)
          </p>
          <p className="mt-3 font-display text-xl font-semibold text-ink">
            Text <span className="text-coral">{SMS_RESERVE_KEYWORD}</span> to{" "}
            {SMS_RESERVATION_PHONE_DISPLAY} to book a table.
          </p>
        </div>

        <h3 className="mt-8 font-display text-lg font-semibold text-ink">
          Consent flow
        </h3>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink/75">
          <li>
            Guest reads opt-in disclosure on{" "}
            <Link href="/booking" className="text-coral hover:underline">
              {BOOKING_URL}
            </Link>{" "}
            (or in-store signage linking to the same URL).
          </li>
          <li>
            Guest sends <strong>{SMS_RESERVE_KEYWORD}</strong> to{" "}
            {SMS_RESERVATION_PHONE_DISPLAY} from their own device.
          </li>
          <li>
            We send an initial reply acknowledging the request, confirming
            opt-in to reservation-related SMS, and requesting booking details
            (location, date, time, party size).
          </li>
          <li>
            Guest may continue the conversation to complete the reservation or
            reply <strong>{SMS_OPT_OUT_KEYWORD}</strong> to end further
            messages.
          </li>
        </ol>

        <p className="mt-6 text-sm leading-relaxed text-ink/75">
          <strong className="text-ink">Consent language shown to guests:</strong>{" "}
          By texting {SMS_RESERVE_KEYWORD} to {SMS_RESERVATION_PHONE_DISPLAY},
          you agree to receive SMS messages from {BUSINESS_LEGAL_NAME} about
          your reservation and related dining updates. Message frequency varies.
          Message and data rates may apply. Reply {SMS_OPT_OUT_KEYWORD} to
          cancel. Reply {SMS_HELP_KEYWORD} for help. Consent is not a condition
          of purchase.
        </p>
      </section>

      <section id="message-types" className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Message types &amp; frequency
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/75">
          <li>
            <strong className="text-ink">Transactional / service:</strong>{" "}
            reservation confirmations, changes, reminders, waitlist updates, and
            replies to guest questions about a booking.
          </li>
          <li>
            <strong className="text-ink">Occasional promotional:</strong>{" "}
            special events or offers only if the guest has opted in and has not
            opted out; frequency is low and tied to dining occasions.
          </li>
          <li>
            <strong className="text-ink">Frequency:</strong> varies by guest
            activity—typically a handful of messages per reservation request,
            not daily broadcasts.
          </li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">
          We do not sell mobile numbers or SMS consent lists. Messages are sent
          through Twilio on behalf of {BUSINESS_LEGAL_NAME}.
        </p>
      </section>

      <section id="opt-out" className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Opt-out &amp; help
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/75">
          <li>
            Reply <strong>{SMS_OPT_OUT_KEYWORD}</strong> to any message to
            unsubscribe from future SMS (including marketing).
          </li>
          <li>
            Reply <strong>{SMS_HELP_KEYWORD}</strong> for program information
            and support contact details.
          </li>
          <li>
            Email{" "}
            <a
              href={`mailto:${BUSINESS_EMAIL}?subject=SMS%20opt-out%20request`}
              className="text-coral hover:underline"
            >
              {BUSINESS_EMAIL}
            </a>{" "}
            with &quot;SMS opt-out&quot; in the subject line.
          </li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">
          After opting out, you may receive a final one-time confirmation
          message. You may still receive messages required to complete an
          active reservation you initiated.
        </p>
      </section>

      <section id="data" className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Data use &amp; related policies
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">
          Mobile numbers and message content are used to fulfill reservation
          requests, improve guest service, and comply with carrier rules. See
          our{" "}
          <Link href="/privacy" className="text-coral hover:underline">
            privacy policy
          </Link>{" "}
          for retention, sharing, and rights information, and our{" "}
          <Link href="/terms" className="text-coral hover:underline">
            terms &amp; conditions
          </Link>{" "}
          for program rules.
        </p>
      </section>

      <section id="proof" className="mt-12 rounded-2xl border border-sea/10 bg-white p-8 shadow-sm">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Proof URLs (for carrier / Twilio review)
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">
          Submit these HTTPS URLs when asked for opt-in policy proof, terms, or
          privacy policy:
        </p>
        <ul className="mt-4 space-y-2 font-mono text-xs text-ink/80 sm:text-sm">
          <li>
            <span className="text-ink/55">Opt-in / booking page: </span>
            <a href={BOOKING_URL} className="break-all text-coral hover:underline">
              {BOOKING_URL}
            </a>
          </li>
          <li>
            <span className="text-ink/55">SMS opt-in policy (this page): </span>
            <a
              href={SMS_COMPLIANCE_URL}
              className="break-all text-coral hover:underline"
            >
              {SMS_COMPLIANCE_URL}
            </a>
          </li>
          <li>
            <span className="text-ink/55">Terms &amp; conditions: </span>
            <a href={TERMS_URL} className="break-all text-coral hover:underline">
              {TERMS_URL}
            </a>
          </li>
          <li>
            <span className="text-ink/55">Privacy policy: </span>
            <a
              href={PRIVACY_POLICY_URL}
              className="break-all text-coral hover:underline"
            >
              {PRIVACY_POLICY_URL}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
