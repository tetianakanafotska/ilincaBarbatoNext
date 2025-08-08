import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-google-analytics-opt-out="">
      <body>
        <CookieBanner />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
