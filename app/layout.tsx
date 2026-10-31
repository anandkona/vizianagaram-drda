import type { Metadata, Viewport } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";
import PortalShell from "@/components/PortalShell";
import { PortalUIProvider } from "@/components/PortalUIContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VIZIANAGARAM DISTRICT | Citizen Services & District Development Portal",
    template: "%s | Vizianagaram District",
  },
  description:
    "Citizen Services & District Development Portal for Vizianagaram District, Government of Andhra Pradesh.",
  applicationName: "Vizianagaram District Portal",
  keywords: [
    "Vizianagaram District",
    "Andhra Pradesh",
    "Citizen Services",
    "Government Schemes",
    "DRDA",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#5B4300",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <ThemeRegistry>
          <PortalUIProvider>
            <PortalShell>{children}</PortalShell>
          </PortalUIProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
