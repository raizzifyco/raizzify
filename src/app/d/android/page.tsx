"use client";

import { useEffect } from 'react';

const AndroidRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.raizzify.hercules';
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
        Redirecting to the Google Play Store...
      </p>
      <meta httpEquiv="refresh" content="0;url=https://play.google.com/store/apps/details?id=com.raizzify.hercules" />
    </div>
  );
};

export default AndroidRedirect;
