import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Home, Our Priority
            </h1>
            <p className="text-xl text-blue-100">
              Professional home services delivered by experienced technicians. Fast, reliable, and affordable solutions for all your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block text-center"
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 inline-block text-center border-2 border-white"
              >
                View Services
              </Link>
            </div>
            <div className="flex gap-8 pt-6 text-sm">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-blue-100">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-blue-100">Services Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-blue-100">Available</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1578926078328-123456789?w=500&h=500&fit=crop"
              alt="Home Services"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
