import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - SRK Projects | Get Free Quote',
  description: 'Contact SRK Projects for your construction and engineering needs. Get a free quote, schedule a consultation, or learn more about our services.',
  keywords: 'contact SRK Projects, construction quote, engineering consultation, get quote',
  authors: [{ name: 'SRK Projects' }],
  robots: 'index, follow',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
