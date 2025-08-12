import type { Metadata } from 'next'
import { Building2, Wrench, HardHat, Truck, Cog, Ruler, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services - SRK Engineers | Construction & Engineering Solutions',
  description: 'Comprehensive construction and engineering services including civil construction, mechanical engineering, project management, and infrastructure development.',
  keywords: 'construction services, civil engineering, mechanical engineering, project management, infrastructure development',
}

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Civil Construction',
      description: 'Comprehensive civil construction services for all types of infrastructure and building projects.',
      longDescription: 'Our civil construction division specializes in building the foundation of modern society. From roads and bridges to commercial buildings and residential complexes, we bring decades of expertise to every project. Our team ensures structural integrity, compliance with building codes, and adherence to the highest safety standards.',
      features: [
        'Site preparation and excavation',
        'Foundation and structural work',
        'Road and bridge construction',
        'Commercial and residential buildings',
        'Water and wastewater systems',
        'Quality control and testing'
      ],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: Wrench,
      title: 'Mechanical Engineering',
      description: 'Expert mechanical engineering solutions for industrial and commercial applications.',
      longDescription: 'Our mechanical engineering team delivers innovative solutions for complex mechanical systems. We design, install, and maintain HVAC systems, plumbing networks, industrial equipment, and automation systems. Our expertise spans from small commercial projects to large-scale industrial facilities.',
      features: [
        'HVAC system design and installation',
        'Plumbing and piping systems',
        'Industrial equipment installation',
        'Automation and control systems',
        'Maintenance and repair services',
        'Energy efficiency optimization'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and budget compliance.',
      longDescription: 'Our project management team orchestrates every aspect of construction projects, from initial planning to final delivery. We coordinate resources, manage timelines, control costs, and ensure quality standards are met. Our systematic approach minimizes risks and maximizes project success.',
      features: [
        'Project planning and scheduling',
        'Resource allocation and management',
        'Cost control and budgeting',
        'Risk assessment and mitigation',
        'Progress monitoring and reporting',
        'Stakeholder communication'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: Truck,
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including highways, airports, and utilities.',
      longDescription: 'We specialize in developing critical infrastructure that connects communities and drives economic growth. Our infrastructure projects include transportation networks, utility systems, public works, and environmental facilities. We work closely with government agencies and private developers to deliver projects that serve public needs.',
      features: [
        'Highway and road construction',
        'Airport and transportation facilities',
        'Water and wastewater treatment',
        'Power and utility systems',
        'Environmental compliance',
        'Public works projects'
      ],
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: Cog,
      title: 'Industrial Projects',
      description: 'Specialized industrial construction for manufacturing and processing facilities.',
      longDescription: 'Our industrial construction expertise covers manufacturing plants, warehouses, processing facilities, and specialized industrial buildings. We understand the unique requirements of industrial operations and design facilities that optimize productivity, safety, and efficiency. Our projects support various industries including manufacturing, logistics, and processing.',
      features: [
        'Manufacturing facility construction',
        'Warehouse and distribution centers',
        'Processing plant development',
        'Industrial automation systems',
        'Safety and security systems',
        'Equipment integration'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: Ruler,
      title: 'Design & Consulting',
      description: 'Professional engineering design and consulting services for optimal project outcomes.',
      longDescription: 'Our design and consulting services provide clients with expert guidance throughout the project lifecycle. We offer architectural design, structural analysis, cost estimation, and technical support. Our consulting team helps clients make informed decisions and optimize their construction investments.',
      features: [
        'Architectural design services',
        'Structural analysis and design',
        'Cost estimation and budgeting',
        'Technical consultation',
        'Code compliance review',
        'Sustainability assessment'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Comprehensive construction and engineering solutions tailored to meet your project needs. 
              From concept to completion, we deliver excellence in every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our diverse range of services covers every aspect of construction and engineering, 
              ensuring we can handle projects of any size and complexity.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary-800" />
                    </div>
                    <h3 className="text-3xl font-bold text-secondary-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        <span className="text-secondary-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-primary-800 font-semibold hover:text-primary-700 transition-colors duration-200 group"
                  >
                    Get Quote for {service.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose SRK Engineers?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our commitment to excellence, safety, and customer satisfaction sets us apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HardHat className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Expert Team</h3>
              <p className="text-secondary-600">
                Our team of certified professionals brings decades of combined experience 
                in construction and engineering.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Quality Assurance</h3>
              <p className="text-secondary-600">
                We maintain rigorous quality control processes to ensure every project 
                meets or exceeds industry standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">On-Time Delivery</h3>
              <p className="text-secondary-600">
                Our proven project management methodologies ensure projects are completed 
                on schedule and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your construction needs and explore how our services can help 
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-800 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Get Free Consultation
            </Link>
            <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
