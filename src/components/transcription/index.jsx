import React from "react";
import "./transcription.css";

const TranscriptionPage = () => {
  return (
    <div className="transcription-page">
      {/* Introduction */}
      <div className="intro-section">
        <h1>Welcome to Daniel Agwa's Transcription Services</h1>
        <p>
          My name is Daniel Agwa. With a unique blend of accuracy, passion, and
          two years of experience, I specialize in transcribing audio and video
          content for a variety of clients. Whether you're a professional, a
          business, or an individual, my services ensure that every word you
          speak is transformed into precise written text.
        </p>
      </div>

      {/* Why Hire Me */}
      <div className="why-hire-me">
        <h2>Why Choose My Services?</h2>
        <p>
          Over the years, I've collaborated with entities such as Transcription
          for Everyone, S&L Advocates, and Signum Advocates. With a typing speed
          of 50 words per minute, I promise meticulous attention to detail,
          ensuring that your audio is transcribed with the utmost precision.
        </p>
      </div>

      {/* Pricing */}
      <div className="pricing-section">
        <h2>Affordable Pricing</h2>
        <p>
          Quality doesn't have to break the bank. My transcription services are
          priced at just $0.99 per audio minute.
        </p>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <h2>Contact Me Directly</h2>
        <div className="email-detail">
          <p>
            Email:{" "}
            <a href="mailto:agwa.dan@outlook.com">agwa.dan@outlook.com</a>
          </p>
        </div>
        <div className="phone-detail">
          <p>
            Phone: <a href="tel:+256705530039">+256705530039</a>
          </p>
        </div>
        <div className="location-detail">
          <p>Location: Kira Wakiso, Uganda</p>
        </div>
      </div>
    </div>
  );
};

export default TranscriptionPage;
