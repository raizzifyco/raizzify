"use client";

import { useEffect } from 'react';

const AndroidBusinessRedirect: React.FC = () => {
  useEffect(() => {
    // Redirect immediately
    window.location.href = 'https://play.google.com/store/apps/details?id=com.raizzify.crystelle';
  }, []);

  return (
    <div>
      <p>Redirecting to the Google Play Store...</p>
      <meta http-equiv="refresh" content="0;url=https://play.google.com/store/apps/details?id=com.raizzify.crystelle" />
    </div>
  );
};

export default AndroidBusinessRedirect;
