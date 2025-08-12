import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - SRK Engineers | Get Free Quote',
  description: 'Contact SRK Engineers for your construction and engineering needs. Get a free quote, schedule a consultation, or learn more about our services.',
  keywords: 'contact SRK Engineers, construction quote, engineering consultation, get quote',
  authors: [{ name: 'SRK Engineers' }],
  robots: 'index, follow',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
