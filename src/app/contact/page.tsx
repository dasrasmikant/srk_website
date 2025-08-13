'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9777577225',
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@srkprojects.com',
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Janla, Khordha, Bhubaneswar',
      description: 'Visit our office for a meeting'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 10:00 AM - 6:00 PM',
      description: 'Weekend appointments available'
    }
  ]

  const projectTypes = [
    'Civil Construction',
    'Mechanical Engineering',
    'Infrastructure Development',
    'Industrial Projects',
    'Commercial Buildings',
    'Residential Development',
    'Project Management',
    'Design & Consulting',
    'Other'
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-md mx-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Thank You!
          </h2>
          <p className="text-secondary-600 mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary w-full"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Ready to start your construction project? Get in touch with us for a free consultation 
              and quote. Our team is here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote 
                and consultation for your project.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-secondary-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Describe your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                We're here to help with all your construction and engineering needs. 
                Reach out to us through any of these channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-800" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-primary-800 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-secondary-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  Why Choose SRK Projects?
                </h3>
                <ul className="space-y-2 text-sm text-secondary-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Free consultation and quote</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>25+ years of experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Licensed and insured</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Competitive pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Visit our office for a face-to-face meeting or to see our facilities. 
              We're conveniently located in the industrial district.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
              {/* Google Maps Embed - Replace with actual embed code */}
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium">Google Maps Integration</p>
                <p className="text-sm">Replace this with actual Google Maps embed code</p>
                <p className="text-sm mt-2">
                  Address: Janla, Khordha, Bhubaneswar, 751003 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                How quickly can you start a project?
              </h3>
              <p className="text-secondary-600">
                Project start times vary based on scope and current workload. We typically begin 
                within 2-4 weeks of contract signing, with some projects starting immediately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                Do you provide free estimates?
              </h3>
              <p className="text-secondary-600">
                Yes, we provide free, detailed estimates for all projects. Our team will visit 
                your site and provide a comprehensive quote within 48-72 hours.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                What areas do you serve?
              </h3>
              <p className="text-secondary-600">
                We serve the entire metropolitan area and surrounding regions within a 100-mile radius. 
                Contact us to confirm coverage for your specific location.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                Are you licensed and insured?
              </h3>
              <p className="text-secondary-600">
                Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive 
                liability insurance and workers' compensation coverage for your protection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
