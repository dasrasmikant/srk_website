import type { Metadata } from 'next'
import { MapPin, Calendar, Building2, Users, DollarSign, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Projects - SRK Projects | Construction Portfolio',
  description: 'Explore our portfolio of successful construction projects including commercial buildings, infrastructure, industrial facilities, and residential developments.',
  keywords: 'construction projects, portfolio, commercial buildings, infrastructure, industrial facilities',
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Metro Office Complex',
      category: 'Commercial',
      location: 'Downtown Business District',
      year: '2024',
      duration: '18 months',
      budget: '$25M',
      team: '45 members',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'A state-of-the-art office complex featuring sustainable design, modern amenities, and LEED certification. The project includes three interconnected towers with shared facilities.',
      features: ['LEED Platinum Certified', 'Smart Building Technology', 'Green Roof System', 'Underground Parking', 'Conference Center', 'Fitness Facility'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Interstate Highway Bridge',
      category: 'Infrastructure',
      location: 'Interstate Highway 95',
      year: '2023',
      duration: '24 months',
      budget: '$45M',
      team: '80 members',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Major bridge construction project connecting two major metropolitan areas. The project included extensive environmental impact studies and community consultation.',
      features: ['Pre-stressed Concrete Design', 'Seismic Retrofitting', 'LED Lighting System', 'Bike Lanes', 'Emergency Access', 'Environmental Monitoring'],
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Advanced Manufacturing Plant',
      category: 'Industrial',
      location: 'Industrial Park Zone',
      year: '2023',
      duration: '20 months',
      budget: '$35M',
      team: '60 members',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Advanced manufacturing facility with cutting-edge automation systems, robotics integration, and sustainable manufacturing processes.',
      features: ['Automated Assembly Lines', 'Robotic Systems', 'Energy Management', 'Waste Reduction', 'Safety Systems', 'Quality Control Labs'],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Luxury Residential Towers',
      category: 'Residential',
      location: 'Urban Development Area',
      year: '2024',
      duration: '22 months',
      budget: '$40M',
      team: '70 members',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Luxury residential towers with premium amenities, sustainable features, and panoramic city views. The project includes 200+ luxury apartments.',
      features: ['Panoramic Views', 'Rooftop Gardens', 'Concierge Services', 'Fitness Center', 'Swimming Pool', 'Smart Home Technology'],
      status: 'In Progress'
    },
    {
      id: 5,
      title: 'International Airport Terminal',
      category: 'Infrastructure',
      location: 'International Airport',
      year: '2023',
      duration: '30 months',
      budget: '$120M',
      team: '150 members',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Major terminal expansion project enhancing airport capacity and passenger experience. The project included runway improvements and terminal facilities.',
      features: ['Modern Terminal Design', 'Enhanced Security', 'Baggage Handling', 'Retail Spaces', 'Restaurant Areas', 'Passenger Lounges'],
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Shopping Mall Development',
      category: 'Commercial',
      location: 'Suburban Growth Area',
      year: '2024',
      duration: '16 months',
      budget: '$30M',
      team: '55 members',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Modern shopping complex with entertainment facilities, dining options, and sustainable design features. The mall serves the growing suburban community.',
      features: ['Entertainment Center', 'Food Court', 'Retail Spaces', 'Parking Garage', 'Green Building', 'Community Plaza'],
      status: 'In Progress'
    },
    {
      id: 7,
      title: 'Water Treatment Facility',
      category: 'Infrastructure',
      location: 'Municipal District',
      year: '2023',
      duration: '26 months',
      budget: '$55M',
      team: '90 members',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'State-of-the-art water treatment facility serving 500,000 residents. The project includes advanced filtration systems and environmental monitoring.',
      features: ['Advanced Filtration', 'Chemical Treatment', 'Environmental Monitoring', 'Energy Efficiency', 'Safety Systems', 'Control Center'],
      status: 'Completed'
    },
    {
      id: 8,
      title: 'University Research Center',
      category: 'Commercial',
      location: 'University Campus',
      year: '2024',
      duration: '28 months',
      budget: '$50M',
      team: '75 members',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Cutting-edge research facility for scientific innovation and academic excellence. The center includes specialized laboratories and collaborative spaces.',
      features: ['Research Labs', 'Conference Rooms', 'Collaborative Spaces', 'Advanced Equipment', 'Safety Systems', 'Green Building'],
      status: 'In Progress'
    }
  ]

  const categories = ['All', 'Commercial', 'Infrastructure', 'Industrial', 'Residential']
  const statuses = ['All', 'Completed', 'In Progress']

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Explore our portfolio of successful construction projects that showcase our expertise 
              and commitment to quality across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-primary-800 text-white'
                    : 'bg-gray-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {statuses.map((status, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  status === 'All'
                    ? 'bg-primary-800 text-white'
                    : 'bg-gray-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-800'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-yellow-600 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary-800 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <DollarSign className="w-4 h-4" />
                      <span>{project.budget}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Users className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Building2 className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-600">
                          <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary-800 font-semibold hover:text-primary-700 transition-colors duration-200 group-hover:text-primary-700"
                  >
                    View Project Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
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
            Let's discuss your construction vision and explore how our expertise can help 
            bring your project to life with the same quality and excellence shown in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-800 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Get Free Quote
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
