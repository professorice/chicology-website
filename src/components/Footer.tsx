import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Chicology</h3>
            <p className="text-gray-400 mb-4">
              AI-powered self-iterating website technology that continuously improves
              based on user feedback and performance data.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Chicology. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AI-Powered Optimization</li>
              <li>Self-Iterating System</li>
              <li>Cost Optimization</li>
              <li>Real-time Learning</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Technology</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cloudflare Workers</li>
              <li>React & TypeScript</li>
              <li>LaunchDarkly</li>
              <li>GitHub API</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer