import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonials from '../components/Testimonials'
import { servicesData } from '../data/services'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  const whyChooseUsPoints = [
    'Expert and certified technicians',
    '24/7 Customer support',
    'Transparent pricing',
    'Quick response time',
    'Quality guarantee',
    'Eco-friendly solutions'
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Services */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Professional services for all your home needs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">We're committed to excellence in every service</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-blue-600" size={28} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today and get a free consultation. Our team is ready to help you with any home service needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
