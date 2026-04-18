import HeroSection from "../sections/HeroSection"
import PropertyCarouselSection from "../sections/PropertyCarouselSection"

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
      
    </>
  )
}

export default LandingPage
