// app/layout.tsx
import type { Metadata } from "next";
import { GlobalProvider } from "../globalcomponents/GlobalProvider";
import "./globals.css";
import { Providers } from "../globalcomponents/theme-provider";

export const metadata: Metadata = {
  title: "apranthilaka - Design Engineer",
  description: "My Dev Projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <GlobalProvider>{children}</GlobalProvider>
        </Providers>
      </body>
    </html>
  );
}
