import type { Metadata } from 'next'
import { Inter, Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/sonner"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif-jp',
})

export const metadata: Metadata = {
  title: 'Restaurant NOIR | 漆黒に輝く美食の体験',
  description: '厳選された食材と革新的な調理法が織りなす、モダンフレンチレストラン。特別な一夜をNOIRで。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerifJP.variable} dark`} suppressHydrationWarning>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster theme="dark" richColors />
      </body>
    </html>
  )
}

