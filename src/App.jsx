import './App.css'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/ContactUs/ContactUs'
import FAQ from './components/FAQ/FAQ'
import LandingPage from './components/LandingPage/LandingPage'
import OffshoreDevelopment from './components/Offshore/Offshore1'
import OffshoreDevelopment2 from './components/Offshore/Offshore2'
import Technologies from './components/Technology/Technologies'
import Testimonials from './components/Testimonials/Testimonials'
import TrustedPartener from './components/TrustedParteners/TrustedPartener'

function App() {

  return (
    <>
      <LandingPage />
      <OffshoreDevelopment />
      <OffshoreDevelopment2 />
      <TrustedPartener />
      <FAQ />
      <Testimonials />
      <Technologies />
      <Blogs />
      <Contact />
    </>
  )
}

export default App
