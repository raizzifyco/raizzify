"use client";

import { useEffect, useState } from 'react';

const DeepLinkHandler: React.FC = () => {
  const [appOpened, setAppOpened] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  const uniqueId = generateUniqueId();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsIOS(/iPhone|iPad|iPod/i.test(navigator.userAgent));
    }

    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const shopId = url.searchParams.get('id');

    if (shopId) {
      const deferredLink = `raizz://www.raizzify.com/deep/reward?referrer=${uniqueId}`;

      const processDeepLink = async () => {
        await sendUniqueIdToBackend(uniqueId, `${deferredLink}&id=${shopId}`);
        window.location.href = deferredLink;

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
      };

      processDeepLink();
    }
  }, [appOpened, uniqueId]);

  const sendUniqueIdToBackend = async (uniqueId: string, deferredLink: string) => {
    try {
      const response = await fetch('https://nucleus.raizzify.com/api/v1/common/deep-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ unique_id: uniqueId, deferred_link: deferredLink }),
      });

      if (!response.ok) {
        throw new Error(`Failed to send unique ID: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error sending unique ID to backend:', error);
    }
  };

  const getStoreLink = () => {
    if (isIOS) {
      return `https://apps.apple.com/app/raizzify/id6636553867`;
    }
    return `https://play.google.com/store/apps/details?id=com.raizzify.hercules&referrer=${uniqueId}`;
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
          onClick={() => { window.location.href = getStoreLink(); }}
          className="mt-4 bg-[#00bcd3] text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-[#36c4d5] transition duration-200"
        >
          {`Go to ${isIOS ? 'App Store' : 'Google Play Store'}`}
        </button>
      )}
    </div>
  );
};

const generateUniqueId = () => {
  return `pddl-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

export default DeepLinkHandler;
