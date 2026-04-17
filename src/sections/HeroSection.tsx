import Navbar from "./Navbar";
import HeroSearch from "../components/HeroSearch";
import HeroBGImage from "../assets/herobg.jpg"
import WAicon from "../assets/WAicon.svg"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <div className="absolute inset-0">
        <img
          src={HeroBGImage}
          alt="Hero background"
          className="h-full w-full object-cover object-[center_39%]"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <Navbar />

        <div className="flex flex-1 flex-col items-center justify-center text-center px-16">
          <div className="flex w-full max-w-[926px] flex-col gap-10">
            <div className="flex flex-col gap-5">
              
              <h1 className="font-marcellus text-[64px] leading-[76.8px] tracking-[-0.02em] font-normal text-white text-center">
                Kvaliteta ni naključje
              </h1>

              <p className="mx-auto max-w-2xl font-dm-sans text-[18px] leading-[28px] font-normal text-white/90 text-center">
                Vodimo kupce do pravih odločitev in prodajalce do najboljših rezultatov.
              </p>

            </div>

            <HeroSearch />
          </div>
        </div>

        <a
          href="#"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg hover:bg-white-600 transition"
        >
          <img src={WAicon} alt="WA" className="h-[30px] w-auto" />
        </a>
      </div>
    </section>
  );
}