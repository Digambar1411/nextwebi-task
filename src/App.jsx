import './App.css'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/ContactUs/ContactUs'
import LandingPage from './components/LandingPage/LandingPage'
import OffshoreDevelopment from './components/Offshore/Offshore1'
import OffshoreDevelopment2 from './components/Offshore/Offshore2'
import TrustedPartener from './components/TrustedParteners/TrustedPartener'

function App() {

  return (
    <>
      <LandingPage />
      <OffshoreDevelopment />
      <OffshoreDevelopment2 />
      <TrustedPartener />
      <Blogs />
      <Contact />
    </>
  )
}

export default App
