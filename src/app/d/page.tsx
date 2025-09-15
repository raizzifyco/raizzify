"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Playstore from "../../../public/playstore.svg";
import Appstore from "../../../public/appstore.svg";

const DownloadPage: React.FC = () => {
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    // Detect Android
    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.raizzify.hercules";
      return;
    }
    // Detect iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href =
        "https://apps.apple.com/in/app/raizzify/id6636553867";
      return;
    }

    // Not mobile → show fallback page
    setRedirecting(false);
  }, []);

  if (redirecting) {
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
        }}
      >
        {/* Spinner */}
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "6px solid #ddd",
            borderTop: "6px solid #0070f3",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: "20px",
          }}
        />
        <p style={{ fontSize: "1.2rem", color: "#444" }}>
          Redirecting you to the store...
        </p>

        {/* Spinner animation keyframes */}
        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

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
        We couldn’t detect your device automatically. Please choose your
        platform below:
      </p>

      <div className="download-buttons">
        {/* Google Play Store */}
        <a
          href="https://play.google.com/store/apps/details?id=com.raizzify.hercules"
          target="_blank"
          rel="noopener noreferrer"
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

      {/* Responsive styles */}
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
        `}
      </style>
    </div>
  );
};

export default DownloadPage;
