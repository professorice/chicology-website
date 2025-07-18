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
        <Hero title="Autonomous AI Portfolio Website" description="Create a professional portfolio website that showcases AI capabilities, includes interactive demos, responsive design, accessibility features, and performance optimization. The site should demonstrate TypeScript best practices, security-first design, and cost-effective implementation." />
        <Features />
        <About />
        <SuggestionForm />
      </main>
      <Footer />
    </div>
  )
}

export default withLDProvider({
  clientSideID: 'YOUR_LAUNCHDARKLY_CLIENT_ID',
  user: {
    key: 'anonymous-user',
    anonymous: true
  }
})(App)