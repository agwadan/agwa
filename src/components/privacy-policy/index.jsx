import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./privacy-policy.css";

const PrivacyPolicy = () => {
  const effectiveDate = "April 25, 2026";
  const appName = "Calendar of Wisdom";
  const contactEmail = "safarisoul91@gmail.com";

  useEffect(() => {
    const prev = document.title;
    document.title = "Privacy Policy · Calendar of Wisdom";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="privacy-page">

      <Link to="/" className="privacy-back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back
      </Link>

      <div className="privacy-content">

        {/* Header */}
        <div className="privacy-doc-header">
          <h1>Privacy Policy — {appName}</h1>
          <p className="privacy-doc-meta">Effective date: {effectiveDate}</p>
        </div>

        {/* Summary */}
        <div className="privacy-summary-box">
          <strong>Summary</strong>
          {appName} does not collect, store, or share any personal information
          from its users. The app works entirely on your device with no accounts,
          no sign-in, and no analytics.
        </div>

        {/* 1. Introduction */}
        <div className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy applies to the <strong>{appName}</strong> mobile
            application ("App"), developed and maintained by SafariSoul. It
            describes our practices regarding the collection and use of
            information when you use our App.
          </p>
          <p>
            By installing or using the App, you agree to this Privacy Policy.
            If you do not agree, please do not use the App.
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div className="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>
            We collect <strong>no personal information</strong> from users of
            this App. Specifically:
          </p>
          <ul>
            <li>We do not collect your name, email address, or any contact details.</li>
            <li>We do not collect location data.</li>
            <li>We do not collect device identifiers or advertising IDs.</li>
            <li>We do not require account creation or sign-in.</li>
            <li>We do not use analytics, crash reporting, or tracking SDKs.</li>
          </ul>
        </div>

        {/* 3. How the App Works */}
        <div className="privacy-section">
          <h2>3. How the App Works</h2>
          <p>
            {appName} is a digital companion for the <em>Calendar of Wisdom</em> book.
            All content is bundled within the App and displayed locally on your device.
            The App does not connect to any external server or backend service.
          </p>
          <p>
            No internet connection is required to use the App, and no data ever
            leaves your device.
          </p>
        </div>

        {/* 4. Third-Party Services */}
        <div className="privacy-section">
          <h2>4. Third-Party Services</h2>
          <p>
            The App does not integrate any third-party SDKs for analytics,
            advertising, social media, or crash reporting.
          </p>
          <p>
            The App is distributed through the Google Play Store. Google may
            collect certain technical data (such as install counts and crash
            reports) through the Play Store platform itself. This is governed
            by{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google's Privacy Policy
            </a>
            , which is outside our control.
          </p>
        </div>

        {/* 5. Children's Privacy */}
        <div className="privacy-section">
          <h2>5. Children's Privacy</h2>
          <p>
            Because we do not collect any personal information, this App is safe
            for users of all ages, including children under 13. We comply with
            the Children's Online Privacy Protection Act (COPPA) and similar
            regulations by collecting no data at all.
          </p>
        </div>

        {/* 6. Changes to This Policy */}
        <div className="privacy-section">
          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected by an updated "Effective Date" at the top of this
            page. Continued use of the App after any changes constitutes your
            acceptance of the revised policy.
          </p>
        </div>

        {/* 7. Contact */}
        <div className="privacy-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <p>
            <strong>SafariSoul</strong><br />
            Email:{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>

      </div>

      <div className="privacy-footer">
        © {new Date().getFullYear()} SafariSoul · {appName}
      </div>

    </div>
  );
};

export default PrivacyPolicy;
