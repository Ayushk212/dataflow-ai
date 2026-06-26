import Navbar        from './components/Navbar.jsx'
import Hero          from './components/Hero.jsx'
import Features      from './components/Features.jsx'
import HowItWorks    from './components/HowItWorks.jsx'
import Testimonials  from './components/Testimonials.jsx'
import Pricing       from './components/Pricing.jsx'
import SocialProof   from './components/SocialProof.jsx'
import Footer        from './components/Footer.jsx'
import TransferToast from './components/TransferToast.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
      {/* Global toast — mounted once at root, fires on breakpoint transfer */}
      <TransferToast />
    </>
  )
}
