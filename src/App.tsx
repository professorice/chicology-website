import React from 'react'
import { withLDProvider } from 'launchdarkly-react-client-sdk'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import SuggestionForm from './components/SuggestionForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main>
        <Hero title="Daily Build: Photography Portfolio - 7/24/2025" description="Photographer portfolio with image galleries and client testimonials. Auto-generated on 2025-07-24T03:09:33.310Z" />
        <Features />
        <About />
        <SuggestionForm />
      </main>
      <Footer />
    </div>
  )
}

export default withLDProvider({
  clientSideID: import.meta.env.VITE_LAUNCHDARKLY_CLIENT_ID || process.env.LAUNCHDARKLY_CLIENT_ID || '6879b316319ed309cb1e3c50',
  user: {
    key: 'anonymous-user',
    anonymous: true
  }
})(App)