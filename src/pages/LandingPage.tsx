import HeroSection from "../sections/HeroSection"
import PropertyCarouselSection from "../sections/PropertyCarouselSection"
import SplitCTASection from "../sections/SplitCTASection"
import SplitCTAimage from "../assets/SplitCTAimage.jpg"

function LandingPage() {

  return (
    <>

      <HeroSection />
      
      <PropertyCarouselSection
        title="Izpostavljeno"
        buttonText="Preveri več"
        bgColor="bg-white"
      />

      <PropertyCarouselSection
        title="Novo v ponudbi"
        buttonText="Celotna ponudba"
        bgColor="bg-gradient-to-b from-[#F4EFE7] to-white"
      />

      <SplitCTASection
        backgroundImage={SplitCTAimage}
        left={{
          title: "Iščete nepremičnino?",
          buttonText: "Vpišite se",
        }}
        right={{
          title: "Brezplačno ovrednotimo\nvašo nepremičnino",
          buttonText: "Brezplačen posvet",
        }}
      />

    </>
  )
}

export default LandingPage
