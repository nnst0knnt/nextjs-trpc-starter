import type { Metadata, Viewport } from "next";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { TrpcProvider } from "@/providers";

import "../styles/globals.css";
import "@mantine/core/styles.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <TrpcProvider>
          <MantineProvider>{children}</MantineProvider>
        </TrpcProvider>
      </body>
    </html>
  );
}
