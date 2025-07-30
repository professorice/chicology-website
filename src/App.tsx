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
          <Hero title="Iterative Improvement - 7/30/2025" description="Applied improvements: The user provided a current state of the website, which includes some files like App.tsx and main.tsx. They mentioned critical fixes required, especially regarding environment variables for LaunchDarkly. Also, they want incremental improvements in areas like design, performance, accessibility, React patterns, and SEO., Now, moving on to the additional focus areas. Starting with incremental design improvements. Maybe the current design is a bit outdated. I can suggest using CSS-in-JS libraries like styled-components or Emotion to make the styling more maintainable. Also, adding subtle animations can enhance the user experience without being too flashy., SEO improvements might involve adding more descriptive meta tags and using React Helmet to manage document head elements. Proper use of semantic HTML tags can also help search engines understand the content better." buildId="s7qslg8ud" generatedAt="6:00:40 PM" />
          <Features features={["Intelligent Caching","Automated SEO","Dynamic Personalization"]} />
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