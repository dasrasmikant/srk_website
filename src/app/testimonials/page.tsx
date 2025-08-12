import type { Metadata } from 'next'
import { Star, Quote, Building2, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Testimonials - SRK Engineers | Success Stories',
  description: 'Read what our satisfied clients have to say about their experience working with SRK Engineers on construction and engineering projects.',
  keywords: 'client testimonials, success stories, construction reviews, engineering feedback',
}

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO',
      company: 'Metro Development Corp',
      rating: 5,
      text: 'SRK Engineers delivered our office complex project on time and within budget. Their attention to detail and professional approach exceeded our expectations. The team was responsive, knowledgeable, and truly understood our vision. We couldn\'t be happier with the final result.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      project: 'Metro Office Complex',
      projectValue: '$25M',
      projectDuration: '18 months'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Project Manager',
      company: 'City Infrastructure Authority',
      rating: 5,
      text: 'Working with SRK Engineers on our highway bridge project was a pleasure. Their expertise in civil engineering and commitment to safety standards is outstanding. They handled complex challenges with innovative solutions and maintained excellent communication throughout.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      project: 'Interstate Highway Bridge',
      projectValue: '$45M',
      projectDuration: '24 months'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Operations Director',
      company: 'Industrial Manufacturing Inc',
      rating: 5,
      text: 'SRK Engineers transformed our vision into reality. Their industrial construction expertise and innovative solutions helped us create a state-of-the-art facility. The project was completed ahead of schedule and the quality exceeded our expectations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      project: 'Advanced Manufacturing Plant',
      projectValue: '$35M',
      projectDuration: '20 months'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      position: 'Development Manager',
      company: 'Urban Living Properties',
      rating: 5,
      text: 'The residential tower project by SRK Engineers showcases their commitment to quality and innovation. Our residents love the modern amenities and sustainable features. The team\'s attention to detail and customer service was exceptional.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      project: 'Luxury Residential Towers',
      projectValue: '$40M',
      projectDuration: '22 months'
    },
    {
      id: 5,
      name: 'David Wilson',
      position: 'Facilities Director',
      company: 'International Airport Authority',
      rating: 5,
      text: 'SRK Engineers managed our airport terminal expansion with precision and professionalism. This was a complex, high-profile project with strict deadlines and safety requirements. They exceeded every expectation and delivered a world-class facility.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      project: 'Airport Terminal Extension',
      projectValue: '$120M',
      projectDuration: '30 months'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      position: 'Property Manager',
      company: 'Suburban Development Group',
      rating: 5,
      text: 'Our shopping mall project with SRK Engineers was a huge success. They understood our vision for a modern, community-focused development and delivered exactly what we envisioned. The project was completed on time and within budget.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      project: 'Shopping Mall Development',
      projectValue: '$30M',
      projectDuration: '16 months'
    },
    {
      id: 7,
      name: 'Robert Davis',
      position: 'City Engineer',
      company: 'Municipal Water District',
      rating: 5,
      text: 'SRK Engineers delivered our water treatment facility with exceptional quality and attention to environmental standards. Their expertise in infrastructure projects and commitment to community safety was evident throughout the project.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      project: 'Water Treatment Facility',
      projectValue: '$55M',
      projectDuration: '26 months'
    },
    {
      id: 8,
      name: 'Dr. Jennifer Lee',
      position: 'Dean of Engineering',
      company: 'University of Technology',
      rating: 5,
      text: 'Our research center project with SRK Engineers was exceptional. They understood the unique requirements of academic facilities and delivered a world-class research environment. The building\'s design and functionality perfectly support our research mission.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      project: 'University Research Center',
      projectValue: '$50M',
      projectDuration: '28 months'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Projects Completed', icon: Building2 },
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '25+', label: 'Years Experience', icon: Award }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about 
              their experience working with SRK Engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-primary-800" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-secondary-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-secondary-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Real feedback from real clients who have experienced our construction excellence firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-8 h-8 text-primary-800" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-secondary-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Project Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2">Project Details:</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-secondary-600">Project:</span>
                      <div className="font-medium text-secondary-900">{testimonial.project}</div>
                    </div>
                    <div>
                      <span className="text-secondary-600">Value:</span>
                      <div className="font-medium text-secondary-900">{testimonial.projectValue}</div>
                    </div>
                    <div>
                      <span className="text-secondary-600">Duration:</span>
                      <div className="font-medium text-secondary-900">{testimonial.projectDuration}</div>
                    </div>
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-secondary-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-secondary-600">
                      {testimonial.position}
                    </p>
                    <p className="text-primary-800 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Discover how our clients achieved their construction goals with SRK Engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Commercial Excellence</h3>
              <p className="text-secondary-600 mb-4">
                From office complexes to shopping centers, we've helped businesses create 
                impressive spaces that drive success.
              </p>
              <div className="text-2xl font-bold text-primary-800">200+ Projects</div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Infrastructure Innovation</h3>
              <p className="text-secondary-600 mb-4">
                Our infrastructure projects connect communities and drive economic growth 
                with sustainable, long-lasting solutions.
              </p>
              <div className="text-2xl font-bold text-primary-800">150+ Projects</div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Client Satisfaction</h3>
              <p className="text-secondary-600 mb-4">
                Our commitment to excellence has earned us the trust of hundreds of clients 
                across various industries.
              </p>
              <div className="text-2xl font-bold text-primary-800">99% Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Let us help you bring your construction vision to life with the same dedication 
            and expertise that has earned us the trust of hundreds of satisfied clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-800 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Get Free Quote
            </a>
            <a href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
