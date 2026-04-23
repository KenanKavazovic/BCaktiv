import HeroSection from "../sections/HeroSection"
import PropertyCarouselSection from "../sections/PropertyCarouselSection"
import SplitCTASection from "../sections/SplitCTASection"
import SplitCTAimage from "../assets/SplitCTAimage.jpg"
import TestimonialsSection from "../sections/TestimonialsSection"
import ReviewsSection from "../sections/ReviewsSection"
import FeaturedProjectSection from "../sections/FeaturedProjectsSection"
// import ClientsSection from "../sections/ClientsSection"
import NewsSection from "../sections/NewsSection"
import Footer from "../sections/Footer"
import VideoAdviceSection from "../sections/VideoAdviceSection"

function LandingPage() {

  return (
    <>

      <HeroSection />
      
      <PropertyCarouselSection
        title="Izpostavljeno"
        buttonText="Preveri več"
        bgColor="bg-primary-white"
        verticalPadding="pt-[39px] pb-[38px]"
      />

      <PropertyCarouselSection
        title="Novo v ponudbi"
        buttonText="Celotna ponudba"
        bgColor="bg-gradient-to-b from-eggshell-bgr to-primary-white"
        verticalPadding="pt-[37px] pb-[36px]"
      />

      <SplitCTASection
        backgroundImage={SplitCTAimage}
        left={{
          title: "Iščete nepremičnino?",
          buttonText: "Vpišite se",
        }}
        right={{
          title: "Želite prodati\nnepremičnino?",
          buttonText: "Izvedi več",
        }}
      />
      
      <TestimonialsSection />

      <ReviewsSection />
      
      <FeaturedProjectSection />

      {/*<ClientsSection />*/}

      <VideoAdviceSection />

      <NewsSection />

      <Footer />

    </>
  )
}

export default LandingPage
