'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function LayoutWrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  const pathname = usePathname()
  const hideFooter = pathname?.startsWith('/blog')

  return (
    <body className={className}>
      <Navbar />
      {children}
      {!hideFooter && <Footer />}
    </body>
  )
}
