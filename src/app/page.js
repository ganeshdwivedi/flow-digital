import ChoosePlan from '../components/ChooseYourPlan/ChoosePlan'
import Faq from '../components/Faq'
import FeaturedP from '../components/FeaturedProjects/FeaturedP'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import NotSure from '../components/NotSure'
import OurArtwork from '../components/OurArtwork'
import OurDesign from '../components/OurDesign/OurDesign'
import OurExpertise from '../components/OurExpertise/OurExpertisePage'
import ReadyToStart from '../components/ReadyToStart'
import TrustedPart from '../components/TrustedBy/TrustedPart'
import WhyChooseUs from '../components/WhyChooseUS/WhyChooseUs'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <OurExpertise />
      <OurDesign />
      <WhyChooseUs />
      <TrustedPart />
      <FeaturedP />
      <OurArtwork />
      <ChoosePlan />
      <ReadyToStart />
      <NotSure />
      <Faq />
      <Footer />
    </div>
  )
}
