"use client";
import { usePathname } from "next/navigation";
import { SplashProvider } from "@/lib/splashContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/lib/googleAnalytics";
import SplashScreen from "@/components/SplashScreen";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function ClientWrappers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPaitingDetail = pathname.startsWith("/paintings/");
  return (
    <SplashProvider>
      <ReactLenis root options={{ lerp: 0.1 }}>
        <GoogleAnalytics />
        <SplashScreen />
        <Navbar />
        {children}
        {!isPaitingDetail && <Footer />}
      </ReactLenis>
    </SplashProvider>
  );
}
