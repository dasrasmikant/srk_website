import Link from 'next/link'
import { Building2, Wrench, HardHat, Truck, Cog, Ruler } from 'lucide-react'

const ServicesOverview = () => {
  const services = [
    {
      icon: Building2,
      title: 'Civil Construction',
      description: 'Comprehensive civil construction services including roads, bridges, buildings, and infrastructure projects.',
      features: ['Site Preparation', 'Foundation Work', 'Structural Construction', 'Quality Control']
    },
    {
      icon: Wrench,
      title: 'Mechanical Engineering',
      description: 'Expert mechanical engineering solutions for industrial and commercial applications.',
      features: ['HVAC Systems', 'Plumbing', 'Industrial Equipment', 'Maintenance Services']
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and budget compliance.',
      features: ['Planning & Scheduling', 'Resource Management', 'Risk Assessment', 'Progress Monitoring']
    },
    {
      icon: Truck,
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including highways, airports, and utilities.',
      features: ['Transportation', 'Utilities', 'Public Works', 'Environmental Compliance']
    },
    {
      icon: Cog,
      title: 'Industrial Projects',
      description: 'Specialized industrial construction for manufacturing and processing facilities.',
      features: ['Factory Construction', 'Warehouse Facilities', 'Processing Plants', 'Safety Systems']
    },
    {
      icon: Ruler,
      title: 'Design & Consulting',
      description: 'Professional engineering design and consulting services for optimal project outcomes.',
      features: ['Architectural Design', 'Structural Analysis', 'Cost Estimation', 'Technical Support']
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We provide comprehensive construction and engineering services to meet all your project needs. 
            From concept to completion, we ensure quality and excellence in every detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-200">
                <service.icon className="w-8 h-8 text-primary-800" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-800 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-secondary-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-secondary-600">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary-800 font-semibold hover:text-primary-700 transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link href="/services" className="btn-primary text-lg px-8 py-4">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
