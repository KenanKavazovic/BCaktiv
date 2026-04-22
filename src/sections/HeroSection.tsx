import Navbar from "./Navbar";
import HeroSearch from "../components/HeroSearch";
import HeroBGImage from "../assets/herobg.jpg"
import WAicon from "../assets/WAicon.svg"

export default function HeroSection() {
  return (
    <section className="relative h-[726px] w-full overflow-hidden pt-2">

      <div className="absolute inset-0">
        <img
          src={HeroBGImage}
          alt="Hero background"
          className="h-full w-full object-cover object-[center_39%]"
        />
        <div className="absolute inset-0 bg-primary-black/40" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <Navbar />

        <div className="flex flex-1 flex-col items-center justify-center text-center px-16 pt-1">
          <div className="flex w-full max-w-[926px] flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="px-30 font-marcellus text-[64px] leading-[76.8px] tracking-[-0.02em] font-normal text-primary-white text-center">
                Kvaliteta ni naključje
              </h1>

              <p className="px-7 mx-auto max-w-2xl font-dm-sans text-[18px] leading-[28px] font-normal text-primary-white text-center">
                Vodimo kupce do pravih odločitev in prodajalce do najboljših rezultatov.
              </p>

            </div>

            <HeroSearch />
          </div>
        </div>

        <a
          href="#"
          className="absolute bottom-5 right-5 z-50 flex h-[50px] w-[50px] items-center justify-center rounded-[30px] bg-primary-white shadow-lg hover:bg-gray-300 transition"
        >
          <img src={WAicon} alt="WA" className="h-[30px] w-[30px]" />
        </a>
      </div>
    </section>
  );
}