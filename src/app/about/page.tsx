import type { Metadata } from 'next'
import { Users, Award, Target, Shield, Heart, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - SRK Engineers | Leading Construction Company',
  description: 'Learn about SRK Engineers, our mission, values, and the team behind our 25+ years of construction excellence.',
  keywords: 'about SRK Engineers, construction company history, team, mission, values',
}

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, maintaining the highest standards of quality and craftsmanship.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Safety is our top priority. We maintain rigorous safety protocols to protect our team and clients.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and innovative solutions to deliver better results for our clients.'
    }
  ]

  const team = [
    {
      name: 'Robert Smith',
      position: 'CEO & Founder',
      experience: '30+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Leading SRK Engineers with over three decades of construction industry experience.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Operations Officer',
      experience: '20+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Overseeing day-to-day operations and ensuring project delivery excellence.'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Engineer',
      experience: '25+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Leading technical excellence and innovative engineering solutions.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About SRK Engineers
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Building excellence since 1995, we are a trusted partner in construction and engineering, 
              delivering innovative solutions that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Founded in 1995, SRK Engineers began as a small construction company with a big vision: 
                to transform the construction industry through innovation, quality, and customer satisfaction.
              </p>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Over the past 25+ years, we have grown from a local contractor to a regional leader in 
                civil and mechanical construction, serving clients across multiple states and industries.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Our journey has been marked by continuous learning, adaptation to new technologies, and 
                an unwavering commitment to delivering projects that exceed expectations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Construction site"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-800 text-white p-6 rounded-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Mission</h3>
              <p className="text-secondary-600 leading-relaxed">
                To deliver exceptional construction and engineering services that exceed client expectations, 
                while maintaining the highest standards of safety, quality, and environmental responsibility.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Vision</h3>
              <p className="text-secondary-600 leading-relaxed">
                To be the most trusted and innovative construction company, recognized for our commitment 
                to excellence, sustainability, and building lasting relationships with our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-200">
                  <value.icon className="w-10 h-10 text-primary-800" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our company and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-800 font-semibold mb-1">
                    {member.position}
                  </p>
                  <p className="text-secondary-600 text-sm mb-3">
                    {member.experience} Experience
                  </p>
                  <p className="text-secondary-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-primary-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
