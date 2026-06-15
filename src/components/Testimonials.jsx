import { Star } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      text: 'Excellent plumbing service! The technician was professional and fixed the issue quickly. Highly recommended!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      text: 'Best electrical repair service in town. They resolved the wiring issue without any hassle. Great work!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Michael Brown',
      text: 'The house cleaning service was amazing. My home looks brand new. Professional team and friendly staff.',
      rating: 5,
      avatar: '👨‍🦱'
    },
    {
      id: 4,
      name: 'Emily Davis',
      text: 'AC repair was done promptly during the hot season. Technician was knowledgeable and affordable. Thank you!',
      rating: 5,
      avatar: '👩‍🦰'
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Read testimonials from our satisfied customers</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
