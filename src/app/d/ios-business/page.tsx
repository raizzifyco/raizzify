"use client";

import { useEffect } from 'react';

const IOSBusinessRedirect: React.FC = () => {
  useEffect(() => {
    // Redirect immediately
    window.location.href = 'https://raizzify.com/';
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
    }}>
      <p style={{
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
      }}>
        Redirecting to the App Store...
      </p>
      <meta httpEquiv="refresh" content="0;url=https://raizzify.com/" />
    </div>
  );
};

export default IOSBusinessRedirect;
