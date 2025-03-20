import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Laura Rodriguez Model Portfolio',
  description: 'Laura Rodriguez Model Portfolio',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
