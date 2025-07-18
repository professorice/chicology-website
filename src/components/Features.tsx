import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered',
      description: 'Advanced artificial intelligence drives continuous improvement and innovation.',
      icon: '🧠'
    },
    {
      title: 'Self-Iterating',
      description: 'Automatically evolves and improves based on user feedback and performance data.',
      icon: '🔄'
    },
    {
      title: 'Cost Optimized',
      description: 'Built to operate efficiently with minimal costs and maximum performance.',
      icon: '💡'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for an intelligent, evolving web presence
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features