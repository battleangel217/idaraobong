import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Idaraobong Portfolio || Fullstack Web Developer',
    template: '%s | Idaraobong Portfolio',
  },
  description: 'Portfolio of Idaraobong, a Fullstack Web Developer specializing in building exceptional digital experiences.',
  openGraph: {
    title: 'Idaraobong Portfolio || Fullstack Web Developer',
    description: 'Portfolio of Idaraobong, a Fullstack Web Developer specializing in building exceptional digital experiences.',
    url: 'https://idaraobong.vercel.app', // Replace with your actual domain
    siteName: 'Idaraobong Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Idaraobong Portfolio || Fullstack Web Developer',
    description: 'Portfolio of Idaraobong, a Fullstack Web Developer specializing in building exceptional digital experiences.',
    creator: '@idaraobong', // Replace with your actual Twitter handle if you have one
  },
  metadataBase: new URL('https://idaraobong.vercel.app'), // Replace with your actual domain
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
