import About from '@/components/About'
import CallToMeet from '@/components/CallToMeet'
import ContactUs from '@/components/ContactUs'
import FAQ from '@/components/FAQ'
import FeaturedServices from '@/components/FeaturedServices'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <FeaturedServices />
        <About />
        <Stats />
        <Services />
        <CallToMeet />
        <FAQ />
        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
