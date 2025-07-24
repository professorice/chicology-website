import React, { useState } from 'react'

const SuggestionForm: React.FC = () => {
  const [suggestion, setSuggestion] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://chicology-worker.mzafir.workers.dev/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          suggestion,
          email,
          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setSuggestion('')
        setEmail('')
      }
    } catch (error) {
      console.error('Error submitting suggestion:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="suggest" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="suggestion-form">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your suggestion has been submitted and will help improve our AI system.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Another Suggestion
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="suggest" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Help Us Improve
          </h2>
          <p className="text-xl text-gray-600">
            Your suggestions help our AI learn and create better experiences
          </p>
        </div>
        <div className="suggestion-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-2">
                Your Suggestion
              </label>
              <textarea
                id="suggestion"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="What would you like to see improved or added?"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Suggestion'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SuggestionForm