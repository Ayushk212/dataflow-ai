import Navbar      from './components/Navbar.jsx'
import Hero        from './components/Hero.jsx'
import Features    from './components/Features.jsx'
import Pricing     from './components/Pricing.jsx'
import SocialProof from './components/SocialProof.jsx'
import Footer      from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
