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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <Header />
      <main>
        <Hero title="Daily Build: Business Landing Page - 7/27/2025" description="Professional business landing page with contact forms and service sections. Auto-generated on 2025-07-27T17:02:12.705Z" buildId="oxugru7ic" generatedAt="5:02:12 PM" />
        <Features features={["AI-Powered Analytics","Performance Monitoring","Intelligent Caching"]} />
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