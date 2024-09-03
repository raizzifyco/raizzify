import { useEffect } from 'react';

const AndroidRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.raizzify.hercules';
  }, []);

  return (
    <div>
      <p>Redirecting to the Google Play Store...</p>
      <meta http-equiv="refresh" content="0;url=https://play.google.com/store/apps/details?id=com.raizzify.hercules" />
    </div>
  );
};

export default AndroidRedirect;
