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
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.LAUNCHDARKLY_CLIENT_ID) {
    return import.meta.env.LAUNCHDARKLY_CLIENT_ID as string;
  }
  
  // This should not happen if the environment variable is properly set in Cloudflare Pages
  throw new Error('LAUNCHDARKLY_CLIENT_ID environment variable is required but not found');
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main>
        <Hero title="Fixed LaunchDarkly Configuration" description="Website should now load properly with LAUNCHDARKLY_CLIENT_ID" buildId="1753635819845" generatedAt="5:03:39 PM" />
        <Features features={["Fixed LaunchDarkly", "Environment Variables", "Proper Configuration"]} />
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