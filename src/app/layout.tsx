// app/layout.tsx
import type { Metadata } from 'next'
import {
  Cabin,
  Manrope,
  Space_Grotesk,
  Plus_Jakarta_Sans,
} from 'next/font/google'
import './globals.css'
import LayoutWrapper from '@/app/layout-wrapper'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const fontSans = Manrope({
  subsets: ['latin'],
  weight: ['400', '200', '300', '500', '600', '700'],
  variable: '--font-manrope',
})
const spaceFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '300', '500', '600', '700'],
  variable: '--font-space-grotesk',
})
const cabinFont = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cabin',
})

export const metadata: Metadata = {
  title: 'Raizzify',
  description: 'A next gen application for salons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const allFonts = `${fontSans.variable} ${spaceFont.variable} ${cabinFont.variable} ${plusJakartaSans.variable}`

  return (
    <html lang="en">
      <LayoutWrapper className={allFonts}>{children}</LayoutWrapper>
    </html>
  )
}
