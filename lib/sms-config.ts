/** SMS reservation line (Twilio toll-free). */
export const SMS_RESERVATION_PHONE_E164 =
  process.env.NEXT_PUBLIC_SMS_RESERVATION_PHONE ?? "+18776001886";

export const SMS_RESERVATION_PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_SMS_RESERVATION_PHONE_DISPLAY ?? "(877) 600-1886";

/** Keyword guests text to start a reservation conversation (case-insensitive). */
export const SMS_RESERVE_KEYWORD = "RESERVE";

export const SMS_OPT_OUT_KEYWORD = "STOP";
export const SMS_HELP_KEYWORD = "HELP";

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wubistro.com";

export const SMS_COMPLIANCE_URL = `${SITE_ORIGIN}/sms-compliance`;
export const BOOKING_URL = `${SITE_ORIGIN}/booking`;
export const PRIVACY_POLICY_URL = `${SITE_ORIGIN}/privacy`;
export const TERMS_URL = `${SITE_ORIGIN}/terms`;

export const BUSINESS_LEGAL_NAME = "Wu's Bistro Group";
export const BUSINESS_EMAIL = "info@WuBistro.com";
export const BUSINESS_PHONE_DISPLAY = "+1 (724) 390-6466";
export const BUSINESS_PHONE_E164 = "+17243906466";
