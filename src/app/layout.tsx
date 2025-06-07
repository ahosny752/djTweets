import type React from "react";
import "@/app/globals.css";
// import { ThemeProvider } from "../components/theme-provider"

export const metadata = {
  title: "DJTweets - Create Custom Tweet Images",
  description: "Overlay text on tweet images and export them as JPEGs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DJTweets</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
