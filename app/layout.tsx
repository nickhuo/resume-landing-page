import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Nick H. - Resume',
  description: 'Professional resume of Jiajun (Nick) H. - Data Scientist and Business Intelligence Engineer',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        {children}
      </body>
    </html>
  )
} 