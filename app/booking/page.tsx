import Link from "next/link";
import { RestaurantLocations } from "@/components/RestaurantLocations";
import {
  BOOKING_URL,
  BUSINESS_EMAIL,
  BUSINESS_LEGAL_NAME,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_E164,
  PRIVACY_POLICY_URL,
  SMS_COMPLIANCE_URL,
  SMS_HELP_KEYWORD,
  SMS_OPT_OUT_KEYWORD,
  SMS_RESERVATION_PHONE_DISPLAY,
  SMS_RESERVATION_PHONE_E164,
  SMS_RESERVE_KEYWORD,
  TERMS_URL,
} from "@/lib/sms-config";

const smsBody = encodeURIComponent(SMS_RESERVE_KEYWORD);
const smsHref = `sms:${SMS_RESERVATION_PHONE_E164}?body=${smsBody}`;

export default function BookingPage() {
  return (
    <div className="bg-shell/30">
      <section className="border-b border-sea/10 bg-gradient-to-br from-shell via-white to-shell">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
            Reservations
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Book a table
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Reserve at <strong className="font-semibold text-ink">Xie Bao</strong>{" "}
            or <strong className="font-semibold text-ink">Wu&apos;s Fish House</strong>{" "}
            across Manhattan, Flushing, and Edison. Our fastest option is SMS—text
            us your preferred date, time, party size, and location.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-2xl border-2 border-sea/20 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            SMS reservation — keyword opt-in
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Text{" "}
            <span className="text-coral">{SMS_RESERVE_KEYWORD}</span> to{" "}
            <span className="whitespace-nowrap">{SMS_RESERVATION_PHONE_DISPLAY}</span>
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            To book a table via text message, send the keyword{" "}
            <strong className="font-semibold text-ink">{SMS_RESERVE_KEYWORD}</strong>{" "}
            to{" "}
            <a
              href={`tel:${SMS_RESERVATION_PHONE_E164}`}
              className="font-semibold text-coral hover:underline"
            >
              {SMS_RESERVATION_PHONE_DISPLAY}
            </a>
            . A team member or automated assistant will reply to confirm
            availability, collect party details, and send reservation updates.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={smsHref}
              className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-coral/25 transition hover:bg-coral/90"
            >
              Text {SMS_RESERVE_KEYWORD} now
            </a>
            <a
              href={`tel:${SMS_RESERVATION_PHONE_E164}`}
              className="inline-flex items-center justify-center rounded-full border border-sea/25 bg-white px-7 py-3 text-sm font-semibold text-ink transition hover:border-sea/50"
            >
              Call {SMS_RESERVATION_PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-8 rounded-xl border border-sea/10 bg-shell/50 p-6 text-sm leading-relaxed text-ink/70">
            <p className="font-semibold text-ink">SMS consent disclosure</p>
            <p className="mt-2">
              By texting <strong>{SMS_RESERVE_KEYWORD}</strong> to{" "}
              {SMS_RESERVATION_PHONE_DISPLAY}, you agree to receive SMS messages
              from {BUSINESS_LEGAL_NAME} about your reservation request and
              related dining updates. Message frequency varies. Message and data
              rates may apply. Reply <strong>{SMS_OPT_OUT_KEYWORD}</strong> to
              cancel. Reply <strong>{SMS_HELP_KEYWORD}</strong> for help. Consent
              is not a condition of purchase.
            </p>
            <p className="mt-3">
              See our{" "}
              <Link href="/sms-compliance" className="text-coral hover:underline">
                SMS opt-in policy
              </Link>
              ,{" "}
              <Link href="/privacy" className="text-coral hover:underline">
                privacy policy
              </Link>
              , and{" "}
              <Link href="/terms" className="text-coral hover:underline">
                terms &amp; conditions
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-sea/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-ink">
              How SMS booking works
            </h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink/75">
              <li>
                Text <strong>{SMS_RESERVE_KEYWORD}</strong> to{" "}
                {SMS_RESERVATION_PHONE_DISPLAY}.
              </li>
              <li>
                Reply with your preferred location (Manhattan, Flushing, or
                Edison), date, time, and party size.
              </li>
              <li>
                Receive confirmation, reminders, or follow-up if we need more
                information.
              </li>
              <li>
                Text <strong>{SMS_OPT_OUT_KEYWORD}</strong> at any time to stop
                marketing texts. Transactional reservation messages may continue
                until your visit is complete.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-sea/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-ink">
              Other ways to reserve
            </h3>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-ink/75">
              <li>
                <span className="font-semibold text-ink">Xie Bao USA</span>
                <br />
                <a
                  href="https://xiebaousa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline"
                >
                  xiebaousa.com
                </a>{" "}
                — online reservations and location phone numbers.
              </li>
              <li>
                <span className="font-semibold text-ink">Email</span>
                <br />
                <a
                  href={`mailto:${BUSINESS_EMAIL}?subject=Reservation%20request`}
                  className="text-coral hover:underline"
                >
                  {BUSINESS_EMAIL}
                </a>{" "}
                — include location and party details in the subject line.
              </li>
              <li>
                <span className="font-semibold text-ink">Phone</span>
                <br />
                <a
                  href={`tel:${BUSINESS_PHONE_E164}`}
                  className="text-coral hover:underline"
                >
                  {BUSINESS_PHONE_DISPLAY}
                </a>{" "}
                — corporate line; location numbers on the guest site.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-sea/10 bg-white p-8 shadow-sm">
          <h3 className="font-display text-xl font-semibold text-ink">
            Restaurant locations
          </h3>
          <p className="mt-2 text-sm text-ink/60">
            Mention your preferred location when texting or calling so we route
            your request to the right team.
          </p>
          <div className="mt-6">
            <RestaurantLocations />
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-ink/50">
          Opt-in policy URL for carriers:{" "}
          <a href={BOOKING_URL} className="text-sea hover:underline">
            {BOOKING_URL}
          </a>
          {" · "}
          <a href={SMS_COMPLIANCE_URL} className="text-sea hover:underline">
            {SMS_COMPLIANCE_URL}
          </a>
          {" · "}
          <a href={TERMS_URL} className="text-sea hover:underline">
            {TERMS_URL}
          </a>
          {" · "}
          <a href={PRIVACY_POLICY_URL} className="text-sea hover:underline">
            {PRIVACY_POLICY_URL}
          </a>
        </p>
      </section>
    </div>
  );
}
