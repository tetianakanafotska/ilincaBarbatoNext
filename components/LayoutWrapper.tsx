"use client";

import { SplashProvider } from "@/lib/splashContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/lib/googleAnalytics";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";

import { ReactLenis } from "lenis/react";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPaintingDetail = pathname.startsWith("/paintings");
  return (
    <SplashProvider>
      <ReactLenis root options={{ lerp: 0.1 }}>
        <GoogleAnalytics />
        <SplashScreen />
        <Navbar />
        {children}
        {!isPaintingDetail && <Footer />}
      </ReactLenis>
    </SplashProvider>
  );
}
