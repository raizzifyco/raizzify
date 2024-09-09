"use client";

import { useEffect } from 'react';

const AndroidBusinessRedirect: React.FC = () => {
  useEffect(() => {
    // Redirect immediately
    window.location.href = 'https://play.google.com/store/apps/details?id=com.raizzify.crystelle';
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
      <meta httpEquiv="refresh" content="0;url=https://play.google.com/store/apps/details?id=com.raizzify.crystelle" />
    </div>
  );
};

export default AndroidBusinessRedirect;
