import ServiceCard from '../components/ServiceCard'
import { servicesData } from '../data/services'

function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Professional home services delivered by certified technicians. Choose from our range of services below.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Service Details</h2>
          <p className="section-subtitle">Learn more about each of our services</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {servicesData.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-700 mb-6">{service.details}</p>
                <div className="space-y-2 text-gray-600">
                  <p>✓ Professional & Certified</p>
                  <p>✓ Quick Response Time</p>
                  <p>✓ Transparent Pricing</p>
                  <p>✓ Quality Guarantee</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6">Need Any of Our Services?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us now for a free estimate and professional consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services
