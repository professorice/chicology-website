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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <Header />
        <main>
          <Hero title="Iterative Improvement - 8/4/2025" description="Applied improvements: Next, the additional focus areas include design, performance, accessibility, React patterns, and SEO. I need to think of specific, actionable improvements without overhauling the existing design. For design, maybe adding a loading spinner would enhance user experience. Performance-wise, using React.memo could help with component re-renders. Accessibility is important, so adding ARIA labels and semantic HTML elements would be good steps., Modern React patterns like Suspense for data fetching could make the app more efficient. SEO improvements might involve dynamic titles and meta tags. I should also consider adding analytics for better tracking, but that's optional., I need to make sure each suggestion is clear and implementable. For example, when suggesting environment variable fixes, I should provide exact code snippets. For design improvements, maybe outline where to add the spinner and how to style it. Performance tips should include specific React hooks or optimizations." buildId="5vcbay2kg" generatedAt="6:01:32 PM" />
          <Features features={["AI-Powered Analytics","Real-time Optimization","Smart Content Management"]} />
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