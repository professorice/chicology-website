import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Chicology
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Chicology represents the future of web development - an AI-powered platform
              that continuously learns, adapts, and improves based on real user interactions
              and feedback. Generated fresh on 7/25/2025 at 5:58:28 PM.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our self-iterating system uses advanced machine learning to optimize
              user experience, performance, and functionality automatically, ensuring
              your website stays ahead of the curve with unique builds every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <span className="text-green-500 text-xl mr-2">✓</span>
                <span className="text-gray-700">Automated Optimization</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 text-xl mr-2">✓</span>
                <span className="text-gray-700">Real-time Learning</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Build ID: 2p9dskidg | Iteration: 1753466308414
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">⚡</span>
                Reduced development time by 80%
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">📈</span>
                Improved user engagement
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">🎯</span>
                Data-driven optimizations
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">🔧</span>
                Zero-maintenance updates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About