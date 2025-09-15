"use client";

import Image from "next/image";
import Playstore from "../../../public/playstore.svg";
import Appstore from "../../../public/appstore.svg";

const DownloadPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#222" }}>
        Download Raizzify
      </h1>
      <p style={{ marginBottom: "2rem", color: "#555", maxWidth: "400px" }}>
        Choose your platform below to get started:
      </p>

      <div className="download-buttons">
        {/* Google Play Store */}
        <a
          href="https://play.google.com/store/apps/details?id=com.raizzify.hercules"
          target="_blank"
          rel="noopener noreferrer"
          className="store-link"
        >
          <Image
            src={Playstore}
            alt="Get it on Google Play"
            width={0}
            height={0}
            style={{
              height: "60px",
              width: "auto",
              cursor: "pointer",
            }}
          />
        </a>

        {/* Apple App Store */}
        <a
          href="https://apps.apple.com/in/app/raizzify/id6636553867"
          target="_blank"
          rel="noopener noreferrer"
          className="store-link"
        >
          <Image
            src={Appstore}
            alt="Download on the App Store"
            width={0}
            height={0}
            style={{
              height: "60px",
              width: "auto",
              cursor: "pointer",
            }}
          />
        </a>
      </div>

      {/* Styles */}
      <style>
        {`
          .download-buttons {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
          }

          @media (max-width: 600px) {
            .download-buttons {
              flex-direction: column;
              align-items: center;
              gap: 16px;
            }
          }

          .store-link {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .store-link:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </div>
  );
};

export default DownloadPage;
