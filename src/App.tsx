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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
        <Header />
        <main>
          <Hero title="Iterative Improvement - 8/3/2025" description="Applied improvements: Next, the additional focus areas include design improvements, performance, accessibility, modern React patterns, and SEO. I'll need to think of specific, actionable changes in each area without overhauling the current design., For design, maybe adding a loading spinner or toast notifications could enhance the user experience. Performance-wise, implementing React.memo or lazy loading might help. Accessibility could involve adding ARIA labels or using semantic HTML. Modern patterns might include state management with Context or Redux. SEO improvements could involve setting up a sitemap or using proper meta tags., I should also consider how to structure these improvements incrementally. Perhaps prioritize the critical fixes first, then move on to the other areas, ensuring each change is implementable and builds upon the current design." buildId="mcqa8ib7a" generatedAt="6:00:32 PM" />
          <Features features={["AI-Powered Analytics","Dynamic Personalization","Intelligent Caching"]} />
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