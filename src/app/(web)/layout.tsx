import Footer from "@/components/footer"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { absoluteUrl, ogUrl } from "@/lib/utils"
import "@/styles/index.css"
import { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://segu.work"),
  title: {
    default: "Segundo Juan — Software Engineer",
    template: "%s | Segundo Juan",
  },
  description:
    "Product-minded fullstack engineer building software from discovery to production.",
  openGraph: {
    title: "Segundo Juan — Software Engineer",
    description:
      "Product-minded fullstack engineer building software from discovery to production.",
    url: absoluteUrl("/"),
    siteName: "Segundo Juan",
    images: [
      {
        url: ogUrl("Segundo Juan — Software Engineer"),
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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
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
              })(window,document,'script','dataLayer','GTM-KDW85KP2');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 pt-20 md:pt-32">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
