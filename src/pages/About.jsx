import { Users, Target, Heart, Award } from 'lucide-react'

function About() {
  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction in every service we deliver.'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of quality in all our work.'
    },
    {
      icon: <Target size={32} />,
      title: 'Reliability',
      description: 'You can depend on us for timely and professional service delivery.'
    },
    {
      icon: <Users size={32} />,
      title: 'Team Work',
      description: 'Our expert team works together to provide the best solutions.'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About HomeServices</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted partner for professional home services since 2020.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg mb-4">
                HomeServices was founded with a simple mission: to provide reliable, professional, and affordable home services to our community. What started as a small team has grown into a trusted name in home maintenance and repair.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                We believe that everyone deserves access to quality services without breaking the bank. Our team of certified professionals is dedicated to delivering excellence in every job, no matter how big or small.
              </p>
              <p className="text-gray-700 text-lg">
                Today, we're proud to serve hundreds of happy customers and continue to expand our services to meet the growing needs of our community.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional home services that enhance the quality of life for our customers. We aim to be the most trusted and reliable service provider in the region by maintaining the highest standards of professionalism, integrity, and customer care.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the leading home services company known for innovation, reliability, and customer satisfaction. We envision a future where every homeowner has access to trustworthy professionals who care about their homes as much as they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">These values guide everything we do</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Why Trust Us?</h2>
          <p className="section-subtitle">What sets us apart from the competition</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <h3 className="text-xl font-bold text-gray-900">Happy Customers</h3>
              <p className="text-gray-700">Hundreds of satisfied customers trust us with their home services needs.</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-blue-600">10+</div>
              <h3 className="text-xl font-bold text-gray-900">Years Experience</h3>
              <p className="text-gray-700">Over a decade of experience in providing quality home services.</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <h3 className="text-xl font-bold text-gray-900">Support Available</h3>
              <p className="text-gray-700">Round-the-clock customer support for emergency situations.</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <h3 className="text-xl font-bold text-gray-900">Certified</h3>
              <p className="text-gray-700">All our technicians are fully certified and insured professionals.</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-blue-600">$</div>
              <h3 className="text-xl font-bold text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-700">No hidden charges. What you see is what you pay.</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-blue-600">✓</div>
              <h3 className="text-xl font-bold text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-700">We stand behind our work with a satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
