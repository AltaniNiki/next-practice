import type { Metadata } from "next";
import "../globals.css";
import { Roboto } from 'next/font/google';
import Shell from "../../components/Shell"
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import Providers from '../providers';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { PageProvider } from "@/context/PageContext";


export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Providers>
            <PageProvider>
              <Shell>

                {children}

              </Shell>
            </PageProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
