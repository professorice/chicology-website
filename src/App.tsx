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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <main>
          <Hero title="Iterative Improvement - 8/11/2025" description="Applied improvements: For SEO, using React Router's dynamic routing with proper URL structures and implementing a sitemap.xml would help search engines crawl the site better. Adding meta tags and using the Next.js SEO package could also enhance on-page SEO., Lastly, I'll make sure the suggestions build upon the current design without replacing it entirely, focusing on incremental enhancements that can be implemented step by step., Here are specific, actionable improvements for the React website:" buildId="4mbccy4yx" generatedAt="6:00:59 PM" />
          <Features features={["Real-time Optimization","Smart Content Management","AI-Powered Analytics"]} />
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