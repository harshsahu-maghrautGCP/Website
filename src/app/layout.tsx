import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import "../styles/custom.css";

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: "Maghraut Technologies",
  description: "At Maghraut Technologies, we offer end-to-end Salesforce services tailored to your business needs. From implementation to AI automation, our team helps you transform your processes with the power of Cloud, Data, and AI.",
  keywords: "Salesforce, Cloud, Data, AI, Implementation, Customization, Integration, Consulting",
  authors: [{ name: "Maghraut Technologies" }],
  icons: {
    icon: "/favicon.ico", // ✅ Correct way to add favicon
  },
  creator: "Maghraut Technologies",
  openGraph: {
    title: "Maghraut Technologies",
    description: "Insighting Every Process with Cloud, Data and AI",
    url: "https://www.maghraut.com",
    siteName: "Maghraut Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maghraut Technologies",
    description: "Insighting Every Process with Cloud, Data and AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={merriweather.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32*32"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${merriweather.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}