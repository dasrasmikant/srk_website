import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import Stats from '@/components/Stats'
import ProjectsPreview from '@/components/ProjectsPreview'
import TestimonialsPreview from '@/components/TestimonialsPreview'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'SRK Engineers - Leading Civil & Mechanical Construction Company',
  description: 'SRK Engineers is a premier construction company specializing in civil and mechanical engineering projects. We deliver excellence in infrastructure development and industrial construction.',
  keywords: 'construction company, civil engineering, mechanical engineering, infrastructure development, industrial projects',
}

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <Stats />
      <ProjectsPreview />
      <TestimonialsPreview />
      <CTASection />
    </div>
  )
}
