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
  // In Cloudflare Pages, environment variables are available through import.meta.env
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    const env = import.meta.env as any;
    if (env.LAUNCHDARKLY_CLIENT_ID) {
      return env.LAUNCHDARKLY_CLIENT_ID;
    }
  }
  
  // This should not happen if the environment variable is properly set in Cloudflare Pages
  throw new Error('LAUNCHDARKLY_CLIENT_ID environment variable is required but not found');
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Header />
      <main>
        <Hero title="Daily Build: Restaurant Site - 7/27/2025" description="Restaurant website with menu, location, and reservation system. Auto-generated on 2025-07-27T17:01:06.570Z" buildId="q6wzpgwbi" generatedAt="5:01:06 PM" />
        <Features features={["Automated SEO","Real-time Optimization","AI-Powered Analytics"]} />
        <About />
        <SuggestionForm />
      </main>
      <Footer />
    </div>
  )
}

// Use LaunchDarkly provider with the required client ID
const clientId = getClientId();

export default withLDProvider({
  clientSideID: clientId,
  user: {
    key: 'anonymous-user',
    anonymous: true
  }
})(App)