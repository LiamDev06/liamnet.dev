import { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { ReactQueryProviderWrapper } from "@/components/ReactQueryProviderWrapper";

import "./globals.css";

export const metadata: Metadata = {
  title: "LiamNet",
  description:
    "Software engineer and product manager building AI-powered products. Currently at Meitner, shipping across the full stack in EdTech.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="LiamNet" />
      </head>
      <body className="antialiased">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReactQueryProviderWrapper>{children}</ReactQueryProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
