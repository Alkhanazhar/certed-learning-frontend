import FadeInSection from "@/hooks/fade-animation";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <FadeInSection>
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-10 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Privacy Policy
          </h1>

          <section className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>Privacy Policy for Certed Technologies:</strong>
              <br />
              At Certed Technologies, we are committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy explains how we collect, use, disclose, and
              protect the information you provide when using our website
              CertedTechnologies.com and our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              1. Information We Collect
            </h2>
            <p>
              <strong>1.1 Personal Information:</strong> We may collect your
              name, email, contact number, and qualifications when you create an
              account or contact us.
            </p>
            <p>
              <strong>1.2 Usage Information:</strong> We collect data like IP
              address, browser, OS, and browsing activities to improve our
              services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              2. Use of Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personalization:</strong> To tailor your experience and
                recommendations.
              </li>
              <li>
                <strong>Communication:</strong> To contact you regarding
                services and support.
              </li>
              <li>
                <strong>Analysis:</strong> For generating statistics and
                improving functionality.
              </li>
              <li>
                <strong>Compliance:</strong> To meet legal obligations and
                protect safety.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              3. Data Sharing & Disclosure
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third parties assisting us
                must keep data confidential.
              </li>
              <li>
                <strong>Business Transfers:</strong> Your data may transfer
                during a merger or acquisition.
              </li>
              <li>
                <strong>Consent:</strong> Your data will be shared only with
                your approval.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              4. Data Security
            </h2>
            <p>
              We use industry-standard measures to protect your data. However,
              no system can be guaranteed 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              5. Third-Party Links
            </h2>
            <p>
              We are not responsible for the privacy practices of other
              websites. Review their policies before submitting personal info.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              6. Children’s Privacy
            </h2>
            <p>
              Our services are not intended for users under 18. We do not
              knowingly collect data from children.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              7. Changes to Policy
            </h2>
            <p>
              We may update this Privacy Policy. Continued use of the site
              constitutes acceptance of any changes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              8. Contact Us
            </h2>
            <p>
              If you have questions or concerns, contact us at:{" "}
              <a
                href="mailto:support@certedtechnologies.com"
                className="text-blue-600 hover:underline"
              >
                support@certedtechnologies.com
              </a>
            </p>

            <p className="text-sm text-gray-600 pt-4 border-t">
              By using the Certed Technologies Website or services, you
              acknowledge that you have read, understood, and agreed to this
              Privacy Policy.
            </p>
          </section>
        </div>
      </FadeInSection>
    </div>
  );
};

export default PrivacyPolicy;
