import { Users, Building2, Award, Clock } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers across various industries'
    },
    {
      icon: Building2,
      number: '1000+',
      label: 'Projects Completed',
      description: 'Successfully delivered construction projects'
    },
    {
      icon: Award,
      number: '25+',
      label: 'Years Experience',
      description: 'Decades of construction excellence'
    },
    {
      icon: Clock,
      number: '99%',
      label: 'On-Time Delivery',
      description: 'Projects completed within schedule'
    }
  ]

  return (
    <section className="section-padding bg-primary-800 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Achievements in Numbers
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Decades of excellence have earned us the trust of hundreds of clients and recognition in the industry.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                <stat.icon className="w-10 h-10 text-primary-200" />
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">
                {stat.number}
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-primary-100 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose SRK Engineers?
            </h3>
            <p className="text-lg text-primary-100 mb-6">
              Our commitment to quality, safety, and customer satisfaction has made us a trusted partner 
              for construction projects of all sizes. We combine innovation with proven methodologies 
              to deliver exceptional results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span>Safety First Approach</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span>Environmental Responsibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
