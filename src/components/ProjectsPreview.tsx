import Link from 'next/link'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'

const ProjectsPreview = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'Commercial',
      location: 'Downtown Business District',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'A state-of-the-art office complex featuring sustainable design and modern amenities.'
    },
    {
      id: 2,
      title: 'Highway Bridge Construction',
      category: 'Infrastructure',
      location: 'Interstate Highway 95',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Major bridge construction project connecting two major metropolitan areas.'
    },
    {
      id: 3,
      title: 'Industrial Manufacturing Plant',
      category: 'Industrial',
      location: 'Industrial Park Zone',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Advanced manufacturing facility with cutting-edge automation systems.'
    },
    {
      id: 4,
      title: 'Residential Tower Complex',
      category: 'Residential',
      location: 'Urban Development Area',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Luxury residential towers with premium amenities and sustainable features.'
    },
    {
      id: 5,
      title: 'Airport Terminal Extension',
      category: 'Infrastructure',
      location: 'International Airport',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Major terminal expansion project enhancing airport capacity and passenger experience.'
    },
    {
      id: 6,
      title: 'Shopping Mall Development',
      category: 'Commercial',
      location: 'Suburban Growth Area',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Modern shopping complex with entertainment facilities and dining options.'
    }
  ]

  const categories = ['All', 'Commercial', 'Infrastructure', 'Industrial', 'Residential']

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Our Featured Projects
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Discover our portfolio of successful construction projects that showcase our expertise 
            and commitment to quality across various sectors.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-800 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-primary-800 font-semibold hover:text-primary-700 transition-colors duration-200 group-hover:text-primary-700"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link href="/projects" className="btn-primary text-lg px-8 py-4">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview
