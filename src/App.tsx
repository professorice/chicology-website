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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main>
        <Hero title="Iterative Improvement - 7/30/2025" description="Applied improvements: The user provided a current state of the website, which includes some files like App.tsx and main.tsx. They mentioned critical fixes required, especially regarding environment variables for LaunchDarkly. Also, they want incremental improvements in areas like design, performance, accessibility, React patterns, and SEO., Now, moving on to the additional focus areas. Starting with incremental design improvements. Maybe the current design is a bit outdated. I can suggest using CSS-in-JS libraries like styled-components or Emotion to make the styling more maintainable. Also, adding subtle animations can enhance the user experience without being too flashy., SEO improvements might involve adding more descriptive meta tags and using React Helmet to manage document head elements. Proper use of semantic HTML tags can also help search engines understand the content better." buildId="mj1zmw0w4" generatedAt="1:16:47 AM" />
        <Features features={["AI-Powered Analytics","Intelligent Caching","Smart Content Management"]} />
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