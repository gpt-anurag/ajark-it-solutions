import About from '@/src/components/About'
import CallToMeet from '@/src/components/CallToMeet'
import ContactUs from '@/src/components/ContactUs'
import FAQ from '@/src/components/FAQ'
import FeaturedServices from '@/src/components/FeaturedServices'
import Footer from '@/src/components/Footer'
import Hero from '@/src/components/Hero'
import Navbar from '@/src/components/Navbar'
import Services from '@/src/components/Services'
import Stats from '@/src/components/Stats'

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Stats />
        <Services />
        <CallToMeet />
        <FAQ />
        <ContactUs />
      </main>
    </>
  )
}
