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
        <Hero title="Agency Website - 7/24/2025" description="Creative agency website with team profiles and project galleries. Generated on 2025-07-24T02:47:46.745Z" />
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