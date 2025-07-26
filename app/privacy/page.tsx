export const metadata = {
  title: "Privacy Policy | Ilinca Barbato",
  description:
    "Learn how we collect, use, and protect your personal data when you visit our site or book a session.",
  openGraph: {
    title: "Privacy Policy | Ilinca Barbato",
    description:
      "Learn how we collect, use, and protect your personal data when you visit our site or book a session.",
    url: "https://ilincabarbato.com/privacy",
    type: "website",
  },
};

function PrivacyPolicy() {
  return (
    <main className="max-w-screen mb-25 mt-30 md:mx-[45px] mx-[20px]">
      <h1 className="text-48 border-b border-dark/40 pb-2 mb-6">
        Privacy Policy
      </h1>

      <div className="lg:w-[50%] w-full">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            We take the protection of your personal data seriously. This privacy
            policy explains how your data is handled when you visit our website,
            book an appointment, or join our WhatsApp newsletter.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Responsible Entity</h2>
          <p>
            <strong>Name:</strong> Ilinca Barbato
            <br />
            <strong>Address:</strong> Rathenower Str. 24, 10559 Berlin
            <br />
            <strong>Email:</strong> ilinca.barbato@yahoo.com
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Data We Collect</h2>
          <p>
            We only collect personal data that you voluntarily provide, such as:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Your name and email when you book an appointment via Calendly
            </li>
            <li>
              Your phone number if you choose to join our WhatsApp newsletter
            </li>
            <li>
              Usage data (e.g., browser type, visited pages) via standard server
              logs
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            4. Booking via Google Calendar
          </h2>
          <p>
            We use <strong>Google Calendar Appointment Schedules</strong>, a
            service provided by Google Ireland Limited, Gordon House, Barrow
            Street, Dublin 4, Ireland.
          </p>
          <p className="mt-2">When you book an appointment:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Your name, email, and any other information you provide are
              processed by Google
            </li>
            <li>
              Google may set cookies or collect usage data as part of your
              interaction
            </li>
            <li>
              <a
                href="https://calendly.com/privacy"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's Privacy Policy
              </a>{" "}
              applies
            </li>
            <li>
              Google complies with the GDPR and related data protection
              regulations
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            5. Newsletter via WhatsApp
          </h2>
          <p>
            We use <strong>WhatsApp</strong> to send updates or newsletters to
            users who have <strong>explicitly opted in</strong>. WhatsApp is a
            service provided by WhatsApp Inc., a subsidiary of Meta Platforms,
            Inc.
          </p>
          <p className="mt-2">By joining the WhatsApp newsletter:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>You consent to us using your phone number to send updates</li>
            <li>You can unsubscribe at any time by messaging "STOP"</li>
            <li>
              WhatsApp's own privacy policy applies:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            6. Legal Basis for Processing
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Art. 6(1)(a) GDPR</strong> – Your consent
            </li>
            <li>
              <strong>Art. 6(1)(b) GDPR</strong> – Fulfillment of a contract
              (e.g., appointment bookings)
            </li>
            <li>
              <strong>Art. 6(1)(f) GDPR</strong> – Legitimate interests, such as
              improving our services
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Access your data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Data Retention</h2>
          <p>
            We store your data only as long as necessary for the purposes stated
            above or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
          <p>
            For any privacy-related questions, please contact:
            <br />
            <strong>Ilinca Barbato</strong>
            <br />
            Email: ilincabarbato@yahoo.com
          </p>
        </section>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
