"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!Cookies.get("cookie_consent")) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    Cookies.set("cookie_consent", "analytics", { expires: 365 });
    setShow(false);
  };

  const decline = () => {
    Cookies.set("cookie_consent", "essential", { expires: 365 });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="w-[30%] relative bg-white text-dark p-6 rounded-lg shadow-lg">
        <button
          onClick={decline}
          aria-label="Close"
          className="absolute top-3 right-3 text-dark hover:text-gray-400 transition-color duration-300"
        >
          ✕
        </button>
        <p className="font-bold text-center mt-1 mb-3">Hey, cookies</p>
        <p className="text-center mb-4">
          We use only Google Analytics cookies to improve your experience and to
          analyze website traffic.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={accept} className="button rounded-full">
            Okay, fine
          </button>
          <button
            onClick={decline}
            className="underline underline-offset-4 hover:text-dark/50 transform-color duration-300 cursor-pointer"
          >
            Don't allow
          </button>
        </div>
      </div>
    </div>
  );
}
