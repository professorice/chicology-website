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
    if (env.LAUNCHDARKLY_CLIENT_ID) {
      return env.LAUNCHDARKLY_CLIENT_ID;
    }
  }
  
  // Fallback: disable LaunchDarkly if no client ID is provided
  throw new Error('LaunchDarkly Client ID not configured. Please set LAUNCHDARKLY_CLIENT_ID environment variable.');
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <Header />
      <main>
        <Hero title="Test Website" description="A test website to verify content generation" buildId="o0oi3xzlj" generatedAt="5:52:43 PM" />
        <Features features={["Intelligent Caching","Real-time Optimization","Dynamic Personalization"]} />
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