import FadeInSection from "@/hooks/fade-animation";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <FadeInSection>
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10 border border-gray-200">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Terms & Conditions
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              These terms and conditions ("Terms") govern your use of the
              website
              <strong> CertedTechnologies.com</strong> and the services provided
              by
              <strong> Certed Technologies</strong> ("we", "us", or "our"). By
              using the Website or our services, you agree to these Terms. If
              not, please do not use our Website or services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-4">
              1. Account Registration
            </h2>
            <p>
              <strong>1.1 Trainer Portal:</strong> Trainers must register with
              accurate information and maintain confidentiality of their
              accounts.
            </p>
            <p>
              <strong>1.2 Company Account:</strong> Companies posting jobs must
              register and are responsible for the accuracy of posted data and
              account activity.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-4">
              2. Trainer Portal
            </h2>
            <p>
              <strong>2.1 Job Listings:</strong> We strive for accuracy but
              cannot guarantee the content of job posts.
            </p>
            <p>
              <strong>2.2 Application Process:</strong> Trainers apply through
              the portal, but Certed Technologies does not guarantee placement.
            </p>
            <p>
              <strong>2.3 User Conduct:</strong> Users must behave
              professionally and lawfully. Misuse can result in account
              termination.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-4">
              3. Company Job Listings
            </h2>
            <p>
              <strong>3.1 Posting Job Listings:</strong> Companies must post
              lawful, accurate job listings. Certed may remove inappropriate
              listings.
            </p>
            <p>
              <strong>3.2 Application Review:</strong> Companies are responsible
              for vetting trainer applicants.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-4">
              4. Intellectual Property
            </h2>
            <p>
              <strong>4.1 Website Content:</strong> All content is owned by
              Certed or licensors. You may not copy, use, or distribute it
              without permission.
            </p>
            <p>
              <strong>4.2 User Content:</strong> By submitting content, you give
              Certed a license to use and distribute it as part of our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-4">
              5. Disclaimer of Warranties
            </h2>
            <p>
              The Website is provided "as is". We do not guarantee accuracy,
              availability, or security. Use of the site is at your own risk.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-4">
              6. Limitation of Liability
            </h2>
            <p>
              Certed Technologies is not liable for any indirect or
              consequential damages, including loss of data or profits.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-4">
              7. Indemnification
            </h2>
            <p>
              You agree to indemnify Certed Technologies against any claims
              resulting from your use of the Website, your breach of these
              Terms, or infringement on third-party rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-4">
              8. Modification and Termination
            </h2>
            <p>
              We may modify or discontinue services at any time. Updated Terms
              become effective upon posting. Continued use implies acceptance.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-4">
              9. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall
              be under the jurisdiction of Indian courts.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-4">
              10. Contact Information
            </h2>
            <p>
              For questions, email us at:{" "}
              <a
                href="mailto:support@certedtechnologies.com"
                className="text-blue-600 hover:underline"
              >
                support@certedtechnologies.com
              </a>
            </p>

            <p className="text-sm text-gray-600 pt-4 border-t">
              By using the Certed Technologies Website or services, you
              acknowledge that you have read, understood, and agreed to these
              Terms and Conditions.
            </p>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default TermsAndConditions;
