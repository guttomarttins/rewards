import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SEO_METADATA, STRUCTURED_DATA, FAQ_STRUCTURED_DATA } from '@/lib/constants';
import Script from 'next/script';

// Local fonts - using the Geist fonts that came with create-next-app
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SEO_METADATA.title,
  description: SEO_METADATA.description,
  keywords: SEO_METADATA.keywords,
  authors: [{ name: 'Microsoft Rewards Brasil' }],
  creator: 'Microsoft Rewards Brasil',
  publisher: 'Microsoft Rewards Brasil',
  robots: SEO_METADATA.robots,
  openGraph: {
    ...SEO_METADATA.openGraph,
    url: 'https://rewards.bing.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Microsoft Rewards Brasil - Ganhe 1.320 pontos de boas-vindas',
      },
    ],
  },
  twitter: SEO_METADATA.twitter,
  verification: {
    google: 'google-site-verification-code', // Replace with actual code
  },
  other: {
    'theme-color': '#0067B8',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1b1a19' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_STRUCTURED_DATA) }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://rewards.bing.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://clarity.microsoft.com" />
        <link rel="dns-prefetch" href="https://rewards.bing.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        {/* Analytics Scripts - Load after hydration */}
        <Script
          id="ga4"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="clarity"
          src="https://clarity.microsoft.com/tag/XXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                send_page_view: false,
                anonymize_ip: true,
              });
            `,
          }}
        />
        <Script
          id="init-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  const hasConsent = document.cookie.includes('analytics_consent=true') ||
                                     localStorage.getItem('analytics_consent') === 'true';
                  if (hasConsent && window.gtag) {
                    gtag('event', 'page_view', {
                      page_path: window.location.pathname,
                      page_title: document.title,
                      page_location: window.location.href,
                    });
                  }
                }
              })();
            `,
          }}
        />

        {/* Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-medium focus:shadow-lg"
        >
          Pular para o conteúdo principal
        </a>

        {children}
      </body>
    </html>
  );
}