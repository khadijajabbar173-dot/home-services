import { Link } from 'react-router-dom'

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Service Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-3xl">
          {service.icon}
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>

        {/* Book Now Button */}
        <Link
          to="/contact"
          className="inline-block w-full text-center bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
