import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="section-padding bg-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Let's discuss your vision and turn it into reality. Our team of experts is ready to help you 
            plan, design, and execute your construction project with precision and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact" className="bg-white text-primary-800 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center space-x-2 group">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
              View Our Portfolio
            </Link>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Call Us Today</h3>
              </div>
              <p className="text-primary-100 mb-4">
                Speak directly with our project managers and get instant answers to your questions.
              </p>
              <a 
                href="tel:+15551234567" 
                className="text-white font-semibold text-lg hover:text-primary-200 transition-colors duration-200"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Email Us</h3>
              </div>
              <p className="text-primary-100 mb-4">
                Send us your project details and we'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:info@srkengineers.com" 
                className="text-white font-semibold text-lg hover:text-primary-200 transition-colors duration-200"
              >
                info@srkengineers.com
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Why Choose SRK Engineers?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span>25+ Years of Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span>500+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span>99% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
