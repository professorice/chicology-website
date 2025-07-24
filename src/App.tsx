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
        <Hero title="Restaurant Site - 7/24/2025" description="Restaurant website with menu, location, and reservation system. Generated on 2025-07-24T03:18:20.965Z" />
        <Features />
        <About />
        <SuggestionForm />
      </main>
      <Footer />
    </div>
  )
}

export default withLDProvider({
  clientSideID: import.meta.env.VITE_LAUNCHDARKLY_CLIENT_ID || 'demo-client-id',
  user: {
    key: 'anonymous-user',
    anonymous: true
  }
})(App)