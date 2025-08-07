import { withLDProvider } from 'launchdarkly-react-client-sdk'
import Observability from '@launchdarkly/observability'
import SessionReplay from '@launchdarkly/session-replay'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import SuggestionForm from './components/SuggestionForm'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

// Get LaunchDarkly client ID from environment
const getClientId = (): string => {
  // Use process.env for proper environment variable access
  if (process.env.LAUNCHDARKLY_CLIENT_ID) {
    return process.env.LAUNCHDARKLY_CLIENT_ID;
  }
  
  // This should not happen if the environment variable is properly set
  throw new Error('LAUNCHDARKLY_CLIENT_ID environment variable is required but not found');
};

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
        <Header />
        <main>
          <Hero title="Iterative Improvement - 8/7/2025" description="Applied improvements: Based on the provided analysis, I'll provide specific, actionable changes to enhance the user experience, performance, accessibility, and modern React patterns." buildId="bcbx0v8t7" generatedAt="6:00:22 PM" />
          <Features features={["AI-Powered Analytics","Real-time Optimization","Performance Monitoring"]} />
          <About />
          <SuggestionForm />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

// Use LaunchDarkly provider with observability plugins
const clientId = getClientId();

export default withLDProvider({
  clientSideID: clientId,
  user: {
    key: 'anonymous-user',
    anonymous: true
  },
  options: {
    plugins: [
      new Observability({
        networkRecording: {
          enabled: true,
          recordHeadersAndBody: true
        }
      }),
      new SessionReplay({
        // Defaults to no obfuscation - see https://launchdarkly.com/docs/sdk/features/client-side-observability#privacy for more details
        privacySetting: 'none'
      })
    ]
  }
})(App)