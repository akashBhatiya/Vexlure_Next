import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vexlureinternational.com"),
  title: {
    default: "Indian Spices Exporter | APEDA Approved | Vexlure International",
    template: "%s | Vexlure International"
  },
  description: "Leading spices exporters in India. APEDA & FSSAI certified. Export turmeric powder, cumin seeds, coriander from Surat. Trusted agriculture products exporter India since 2018.",
  keywords: [
    "spices exporters in india",
    "indian spices exporter",
    "agriculture products exporter india",
    "turmeric powder exporter india",
    "cumin seeds exporter india",
    "coriander seeds exporter india",
    "coriander seeds exporter surat",
    "coriander seeds exporter gujarat",
    "coriander seeds india export",
    "APEDA approved exporters",
    "APEDA approved exporters gujarat",
    "FSSAI certified spice exporters",
    "bulk spices wholesale india",
    "bulk spices wholesale gujarat",
    "best spices exporter in surat",
    "organic spices suppliers india",
    "organic spices suppliers gujarat",
    "red chilli powder export",
    "garlic powder export",
    "guar gum export",
    "fennel seeds export",
    "cumin seeds export",
    "peanuts export india",
    "jeera exporters gujarat",
    "basmati rice export",
    "onion export India",
    "garlic export India"
  ],
  authors: [{ name: "Vexlure International" }],
  creator: "Vexlure International",
  publisher: "Vexlure International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Indian Spices Exporter | APEDA Approved | Vexlure International",
    description: "Leading spices exporters in India. Export turmeric powder, cumin seeds, coriander from Surat. APEDA & FSSAI certified agriculture products exporter.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Vexlure International",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Vexlure International - Agricultural Export",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Spices Exporter | APEDA Approved",
    description: "Leading spices exporters in India. Turmeric, cumin, coriander export from Surat.",
    // images: ["/og-image.jpg"],
    creator: "@vexlure",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    languages: {
      'en-US': process.env.NEXT_PUBLIC_SITE_URL,
      'en-IN': process.env.NEXT_PUBLIC_SITE_URL,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Flaticon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/Flaticon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <NavigationBar />
        {children}
        <Footer />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vexlure International",
              "alternateName": "Vexlure",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
              "description": "Leading exporter of premium agricultural products from India",
              "foundingDate": "2018",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Jash"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Patel Chambers 108",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "postalCode": "395006",
                "addressCountry": "IN"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8320659236",
                  "contactType": "customer service",
                  "areaServed": "Global",
                  "availableLanguage": ["English", "Hindi"]
                }
              ],
              "sameAs": [
                "https://facebook.com/vexlureinternational",
                "https://instagram.com/vexlureinternational/",
                "https://linkedin.com/company/vexlure-international",
                "https://x.com/vexlure"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
