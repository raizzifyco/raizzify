"use client";

import { useEffect, useState } from 'react';

const DeepLinkHandler: React.FC = () => {
  const [appOpened, setAppOpened] = useState(false);

  // Generate unique ID once
  const uniqueId = generateUniqueId();
  const deepLinkUrl = `myapp://www.raizzify.com/deep/reward?referrer=${uniqueId}`;

  useEffect(() => {

    window.location.href = deepLinkUrl;

    const timeout = setTimeout(() => {
      if (!appOpened) {
        setAppOpened(false);
      }
    }, 2000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setAppOpened(true);
        clearTimeout(timeout);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [appOpened, deepLinkUrl, uniqueId]);

  const sendUniqueIdToBackend = async (uniqueId: string, deferredLink: string) => {
    try {
      await fetch('https://api.raizzify.com/api/v1/common/deep-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ unique_id: uniqueId, deferred_link: deferredLink }),
      });
    } catch (error) {
      console.error('Error sending unique ID to backend:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-2xl font-semibold mb-4 text-center">
        Redirecting to the app...
      </p>
      <p className="mt-4 text-gray-600">
        {`If the app doesn't open, you can download it:`}
      </p>
      {!appOpened && (
        <button
          onClick={async () => {
            await sendUniqueIdToBackend(uniqueId, deepLinkUrl);
            window.location.href = `https://play.google.com/store/apps/details?id=com.raizzify.hercules&referrer=${uniqueId}`
          }}
          className="mt-4 bg-[#00bcd3] text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-[#36c4d5] transition duration-200"
        >
          {`Go to Google Play Store`}
        </button>
      )}
    </div>
  );
};

const generateUniqueId = () => {
  return `ddl-${Date.now()}`;
};

export default DeepLinkHandler;
