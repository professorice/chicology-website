import { withLDProvider } from 'launchdarkly-react-client-sdk'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import SuggestionForm from './components/SuggestionForm'
import Footer from './components/Footer'
import './App.css'

// Get LaunchDarkly client ID from environment
const getClientId = (): string => {
  // Check for Vite environment variable (available at build time)
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    const env = import.meta.env as any;
    if (env.VITE_LAUNCHDARKLY_CLIENT_ID) {
      return env.VITE_LAUNCHDARKLY_CLIENT_ID;
    }
  }
  
  // Fallback: disable LaunchDarkly if no client ID is provided
  throw new Error('LaunchDarkly Client ID not configured. Please set VITE_LAUNCHDARKLY_CLIENT_ID environment variable.');
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main>
        <Hero title="Agency Website - 7/24/2025" description="Creative agency website with team profiles and project galleries. Generated on 2025-07-24T03:26:47.483Z" />
        <Features />
        <About />
        <SuggestionForm />
      </main>
      <Footer />
    </div>
  )
}

export default withLDProvider({
  clientSideID: getClientId(),
  user: {
    key: 'anonymous-user',
    anonymous: true
  }
})(App)