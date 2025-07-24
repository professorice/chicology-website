import React from 'react'

interface HeroProps {
  title: string
  description: string
  buildId?: string
  generatedAt?: string
}

const Hero: React.FC<HeroProps> = ({ title, description, buildId, generatedAt }) => {
  return (
    <section className="hero-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          {description}
        </p>
        {buildId && (
          <div className="mb-6 text-sm opacity-75">
            <p>Build ID: {buildId} | Generated: {generatedAt}</p>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero