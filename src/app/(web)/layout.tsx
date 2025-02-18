import { BuiltWithOutstatic } from "@/components/built-with-outstatic"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { absoluteUrl, ogUrl } from "@/lib/utils"
import "@/styles/index.css"
import { Metadata } from "next"
import { GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"

export const metadata: Metadata = {
  // metadataBase: new URL("http://localhost:3000"),
  metadataBase: new URL("https://segu.work"),
  title: {
    default: "Segundo Juan - Blog.",
    template: "%s | Segundo Juan",
  },
  description: "Front-end developer. I write about web, cloud and more.",
  openGraph: {
    title: "Segundo Juan - Blog.",
    description: "Front-end developer. I write about web, cloud and more.",
    url: absoluteUrl("/"),
    siteName: "localhost",
    images: [
      {
        url: ogUrl("Segundo Juan - Blog"),
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // icons: {
  //   icon: [{ url: "/favicon/favicon-32x32.png" }],
  //   apple: [{ url: "/favicon/apple-touch-icon.png" }],
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM // Replace with your actual GTM container ID


  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      </head>
      <body className="relative pb-24 md:pb-36 min-h-screen">
        {/* <GoogleTagManager gtmId={gtmId} /> */}
        <GoogleTagManager gtmId={'G-Q0RN52GJ8G'} />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="relative max-w-6xl mx-auto px-5 h-full pt-8 md:py-24">
            {children}
          </div>
          {/* <BuiltWithOutstatic fixed /> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
