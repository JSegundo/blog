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
    default: "Segundo Juan - Portfolio",
    template: "%s | Segundo Juan",
  },
  description: "Developer portfolio and blog. Clean, content-focused design.",
  openGraph: {
    title: "Segundo Juan - Portfolio",
    description: "Developer portfolio and blog. Clean, content-focused design.",
    url: absoluteUrl("/"),
    siteName: "Segundo Juan",
    images: [
      {
        url: ogUrl("Segundo Juan - Portfolio"),
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM

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
              })(window,document,'script','dataLayer','${'GTM-KDW85KP2'}');
              console.log('GTM loaded with ID: ${'GTM-KDW85KP2'}');
            `,
          }}
        />
      </head>
      <body className="relative pb-24 md:pb-36 min-h-screen bg-[#0a0a0a] text-white">
        <GoogleTagManager gtmId={'GTM-KDW85KP2'} />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="relative max-w-4xl mx-auto px-8 h-full pt-8 md:py-24">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
